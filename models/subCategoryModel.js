import mongoose from "mongoose";
import Category from "./categoryModel.js";

const SubCategorySchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Category,
            required: true
        },
        totalProducts: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true}
)

export default mongoose.model('SubCategory', SubCategorySchema);