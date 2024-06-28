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
            type: String,
            required: true,
        },
        inStock: {
            type: Boolean,
            default: true
        },
        averageRating: {
            type: Number,
        },
        totalRatings: {
            type: Number
        },
        image: {
            type: String,
            default: "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg"
        },
        imageId: {
            type: String,
        },
        images: {
            type: [String],
            default: [
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg",
            ],
        },
        description: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);

ProductSchema.pre('save', async function (next) {
    try {
        let existingCategory = await Category.findOne({ title: this.category });

        if (!existingCategory) {
            let newCategory = new Category({ title: this.category, image: this.image, imageId: this.imageId, gender: this.gender });
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