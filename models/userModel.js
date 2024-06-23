import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pointsEarned: {
        type: Number,
        default: 0,
    },
    totalPointsEarned: {
        type: Number,
        default: 0,
    },
    rank: {
        type: String,
        default: "Bronze"
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    postalCode: {
        type: Number
    }
});

export default mongoose.model("User", UserSchema);