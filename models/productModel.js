import mongoose from "mongoose";
import Category from "./categoryModel.js";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            default: "NEO"
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Category,
            required: true
        },
        inStock: {
            type: Boolean,
            default: true
        },
        image: {
            type: String,
        },
        imageId: {
            type: String,
        },
        description: {
            type: String,
            default: "A high-quality product, designed to meet your needs and exceed your expectations."
        },
    },
    { timestamps: true }
);

ProductSchema.pre('save', async function (next) {
    try {
        let existingCategory = await Category.findOne({ _id: this.category });

        if (!existingCategory) {
            let newCategory = new Category({ title: this.category, image: this.image, imageId: this.imageId });
            await newCategory.save();
        } else {
            existingCategory.itemCount += 1;
            await existingCategory.save();
        }
        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model("Product", ProductSchema);