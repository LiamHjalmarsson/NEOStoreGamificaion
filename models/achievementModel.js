import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            default: 10
        },
        image: {
            type: String,
        },
        imageId: {
            type: String,
        }
    },
    { timestamps: true }
);

export default mongoose.model('Achievement', AchievementSchema);