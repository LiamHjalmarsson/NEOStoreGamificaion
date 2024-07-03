import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        itemCount: {
            type: Number,
            default: 0,
        },
        imageId: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);