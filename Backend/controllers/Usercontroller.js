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
            const user = await User.findOne({ email: req.body.email }).exec();
            if (user) {
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
    Addtocart: async (req, res) => {
        try {
            req.body.quantity = 1
            const userId = req.body.userId;
            const productId = req.body._id
            const { name, price, stock, image, quantity } = req.body;
            const user = await User.findById(userId);

            const newItem = {
                name,
                price,
                stock,
                image,
                quantity,
                productId
            };


            const isExist = await User.findOne(
                { _id: userId, cart: { $elemMatch: { productId: req.body._id } } }
            );
            if (isExist) {
                await User.findOneAndUpdate(
                    { _id: userId, 'cart.productId': productId },
                    { $inc: { 'cart.$.quantity': 1 } }
                );
                return res.send({ success: true, message: 'Item quantity updated in cart' });
            } else {
                user.cart.push(newItem);
                await user.save();
                res.send({ success: true, message: 'Item added to cart successfully' });
            }
        } catch (error) {
            res.send({ success: false, message: 'Error adding item to cart' });
        }


    },
    getproduct: (req, res) => {
        try {
            Product.find().exec().then((item) => {
                res.status(200).json({ success: true, message: 'Item fetched successfully', Data: item });
            }).catch((err) => {
                res.status(500).json({ success: false, message: 'Error ' });
            })
        } catch (err) {
            console.log(err);
        }
    },
    Addproduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save()
            res.send({
                success: true,
                message: "product addedsuccessfully",
            })
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }

    },
    cartCount: async (req, res) => {
        try {
            const userId = req.body.userId;
            const user = await User.findById(userId);
            const cartCount = user.cart.length;
            res.status(200).json({
                success: true,
                data: cartCount
            });
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },
    cartproduct: async (req, res) => {
        try {
            const userId = req.body.userId;
            const user = await User.findById(userId);
            const cartproduct = user.cart
            res.status(200).json({
                success: true,
                data: cartproduct
            });
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },
    deletecart: async (req, res) => {
        const cartId = req.params.id
        const userId = req.body.userId;

        let response = await User.findByIdAndUpdate(userId, {
            $pull: { cart: { _id: cartId } }
        }, { new: true })
        if (response) {
            return res.json({
                status: true,
                message: 'item deleted'
            })
        } else {
            res.json({
                status: false,
                message: "delete failed"
            })
        }

    },
    DecrementCount: async (req, res) => {
        const productId = req.params.id
        await Product.updateOne(
            { _id: productId },
            { $inc: { stock: -1 } }
        );
        res.send({
            status: true
        })

    },
    IncrementCount: async (req, res) => {
        const productId = req.params.id
        const userId = req.body.userId;
        const product = await User.findOne(
            { _id: userId },
            { cart: { $elemMatch: { productId: productId } } }
        );
        const number = product.cart[0].quantity
        await Product.updateOne(
            { _id: productId },
            { $inc: { stock: number } }
        );

    },




}