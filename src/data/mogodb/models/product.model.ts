import mongoose from "mongoose";
import { CategoryModel } from "./category.model";

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name Is Required']
    },

    price:{
        type: Number,
    },

    description: {
        type:String,
    },

    img:{
        type:String
    },

    category:{
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: [true, 'category is required']
    }
})

export const ProductModel = mongoose.model('product',productSchema)
