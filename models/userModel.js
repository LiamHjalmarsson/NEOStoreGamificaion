import mongoose from "mongoose";
import Achievement from "./achievementModel.js";
import Rank from "./rankModel.js";
import Purchase from "./purchaseModel.js";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
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
        avatar: {
            type: String,
        },
        avatarPublicId: {
            type: String,
        },
        pointsEarned: {
            type: Number,
            default: 0,
        },
        totalPointsEarned: {
            type: Number,
            default: 0,
        },
        ranks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Rank,
        }],
        location:
        {
            city: {
                type: String,
                default: "City"
            },
            street: {
                type: String,
                default: "Street",
            },
            postalCode: {
                type: Number,
                default: 25431
            },
            country: {
                type: String,
                default: "Country",
            }
        },
        achievements: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: Achievement,
                }
            ],
            default: "66867684ee6612e8986785ce"
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Purchase
        }],
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        partOfNewsLetter: {
            type: Boolean,
            default: false
        },
        discounts: [{
            type: String
        }]
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