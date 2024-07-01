import mongoose from "mongoose";

const RankSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    unlockAt: {
        type: Number,
    },
});

export default mongoose.model('Rank', RankSchema);