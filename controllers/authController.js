import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js"
import { hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const registerUser = async (req, res) => {
    let hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    let user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
}

export const loginUser = async (req, res) => {
    let user = await User.findOne({
        email: req.body.email
    });

    let token = createJWT({
        userId: user._id,
        role: user.role
    });

    let oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.OK).json({
        token
    });
}

export const logoutUser = async (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(StatusCodes.OK).json({ message: "User logged out" });
}