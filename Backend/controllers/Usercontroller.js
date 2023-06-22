import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/Usermodel.js'
import Product from '../models/Product.js'

export default {
    RegisterUser: async (req, res) => {
        try {
            const userExist = await User.findOne({ email: req.body.email });
            if (userExist) throw new Error("User Exists, Login please");
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
            const newUser = new User(req.body);
            await newUser.save();
            res.send({
                success: true,
                message: "User created Succesfully"
            });
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },
    LoginUser: async (req, res) => {
        try {
            console.log(req.body)
            const user = await User.findOne({ email: req.body.email }).exec();
            if (user) {
                console.log("user found", user)
                const validaPassword = await bcrypt.compare(req.body.password, user.password);
                if (!validaPassword) {
                    throw new Error("Invalid password !");
                } else {
                    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
                    res.send({
                        success: true,
                        message: "user logged in successfully",
                        data: token
                    })
                }
            } else {
                throw new Error("user not found !!");
            }
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },
    Addtocart:async(req,res)=>{
      console.log("hiiii");
      console.log(req.body,"cart  itemd");
      try {
        const userId = req.body.userId;
        const { name,price,stock,image } = req.body;
        const user = await User.findById(userId);
    
        const newItem = {
         name,
          price,
        stock,
        image
        };
    
        user.cart.push(newItem);
        await user.save();
    
        console.log('Item added to cart successfully');
        res.status(200).json({ success: true, message: 'Item added to cart successfully'});
      } catch (error) {
        console.log('Error adding item to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding item to cart' });
      }
   
    },
    getproduct:(req,res)=>{
        try{
            Product.find().exec().then((item)=>{
                res.status(200).json({ success: true, message: 'Item fetched successfully',Data:item});
            }).catch((err)=>{
                res.status(500).json({ success: false, message: 'Error ' });
            })
        }catch(err){
            console.log(err);
        }
    },
    Addproduct:async(req,res)=>{
        try{
        const newProduct= new Product(req.body);
        await newProduct.save()
        res.send({
            success: true,
            message: "product addedsuccessfully",
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }

    },
    cartCount:async(req, res)=>{
        try{
            const userId = req.body.userId;
            console.log(userId)
            const user = await User.findById(userId);
            const cartCount = user.cart.length;
            res.status(200).json({
                success:true,
                data: cartCount
            });
        }catch(err){
            res.send({
                success: false,
                message: err.message
            })
        }
    }

}