import mongoose from 'mongoose';

const ProductSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    stock: {
        type:Number,
        required:true,
        min:0,  
        required: true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const Product=mongoose.model('Products',ProductSchema)
export default Product;