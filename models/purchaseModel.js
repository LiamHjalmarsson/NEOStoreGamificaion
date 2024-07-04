import mongoose from 'mongoose';
import User from "./userModel.js";
import Product from "./productModel.js";

const PurchaseSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Product,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }],
        totalPrice: {
            type: Number,
        },
        totalItems: {
            type: Number,
        },
        name: {
            type: String,
        },
        shippingFee: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Purchase', PurchaseSchema);