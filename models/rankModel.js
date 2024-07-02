import mongoose from "mongoose";

const RankSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        unlockAt: {
            type: Number,
        },
        benefits: [{
            title: {
                type: String,
                default: "Benefit"
            }
        }]
    },
    { timestamps: true }
);

export default mongoose.model('Rank', RankSchema);