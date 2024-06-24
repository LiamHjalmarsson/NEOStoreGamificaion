import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
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
            enum: ['bronze', 'silver', "gold"],
            default: "bronze"
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },
        postalCode: {
            type: Number
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
    },
    {
        timestamp: true
    }
);

UserSchema.methods.toJSON = function () {
    let object = this.toObject();

    delete object.password;

    return object;
}

export default mongoose.model("User", UserSchema);