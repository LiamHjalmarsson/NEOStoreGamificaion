import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from "fs";

export const getUsers = async (req, res) => {
    let users = await User.find({});
    res.status(StatusCodes.OK).json(users);
}

export const getUser = async (req, res) => {
    let user = await User.findById(req.user.userId);
    user = user.toJSON(); // remove password from user
    res.status(StatusCodes.OK).json({ user });
}

export const updateUser = async (req, res) => {
    let newUser = { ...req.body };

    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: "avatars" });
        await fs.unlink(req.file.path);

        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id;
    }

    let updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

    if (req.file && updatedUser.avatarPublicId) {
        await cloudinary.uploader.destroy(updatedUser.avatarPublicId);
    }

    res.status(StatusCodes.OK).json({ message: "user updated" });
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

    res.status(StatusCodes.OK).json({ users, products, categories });
};