import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name Is Required']
    },
    description: {
        type:String,
    }
})

export const CategoryModel = mongoose.model('category',categorySchema)
