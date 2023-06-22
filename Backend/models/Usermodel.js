import mongoose from 'mongoose';

const userchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [{
        image: { type: String},
        name: { type: String},
        price: { type: Number},
        stock: { type: Number}
      }]
},{
    timestamps:true
})


const User=mongoose.model('Users',userchema)
export default User;