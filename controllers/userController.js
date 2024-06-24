import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    let users = await User.find({});
    res.status(StatusCodes.OK).json({ users });
}

export const getUser = async (req, res) => {
    let user = await User.findOne({ _id: req.user.userId });
    res.status(StatusCodes.OK).json({ user });
}

export const updateUser = async (req, res) => {
    let { id } = req.params;
    let user = req.body

    await User.findByIdAndUpdate(id, user);

    res.status(StatusCodes.OK).json({ user });
}

export const deleteUser = async (req, res) => {
    let { id } = req.params;

    await User.findByIdAndDelete(id);

    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(StatusCodes.OK).json({ message: "User deleted" });
}