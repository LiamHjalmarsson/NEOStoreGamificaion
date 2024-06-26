import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    achievement: {
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
        
    }
});

export default mongoose.model('Achievement', AchievementSchema);