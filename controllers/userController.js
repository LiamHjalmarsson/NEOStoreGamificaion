import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Achievement from "../models/achievementModel.js";
import Rank from "../models/rankModel.js";

export const getUsers = async (req, res) => {
    let users = await User.find({});
    res.status(StatusCodes.OK).json({ users });
}

export const getUser = async (req, res) => {
    let user = await User.findById(req.user.userId);
    user = user.toJSON(); // remove password from user
    res.status(StatusCodes.OK).json({ user });
}

export const updateUser = async (req, res) => {
    let user = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true });
    user = user.toJSON(); // remove password from user
    res.status(StatusCodes.OK).json({ user });
}

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete({ _id: req.user.userId });

    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(StatusCodes.OK).json({ message: "User deleted" });
}

export const getStats = async (req, res) => {
    let users = await User.countDocuments();
    let products = await Product.countDocuments();
    let categories = await Category.countDocuments();
    let achievements = await Achievement.countDocuments();
    let ranks = await Rank.countDocuments();

    res.status(StatusCodes.OK).json({ users, products, categories, achievements, ranks });
};