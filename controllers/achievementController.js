import { StatusCodes } from "http-status-codes";
import Achievement from "../models/achievementModel.js"
import { v2 as cloudinary } from "cloudinary";

export const getAchievements = async (req, res) => {
    let achievements = await Achievement.find({});
    res.status(StatusCodes.OK).json(achievements);
}

export const createAchievement = async (req, res) => {
    let newAchievement = {...req.body};

    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: "achievements" });

        newAchievement.image = response.secure_url;
        newAchievement.imageId = response.public_id;
    }

    let achievement = await Achievement.create(newAchievement);

    res.status(StatusCodes.OK).json(achievement);
}

export const getAchievement = async (req, res) => {
    let achievement = await Achievement.findById(req.params.id);
    res.status(StatusCodes.OK).json(achievement);
}

export const updateAchievement = async (req, res) => {
    let achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(StatusCodes.OK).json(achievement);
}

export const deleteAchievement = async (req, res) => {
    let achievement = await Achievement.findByIdAndDelete(req.params.id);

    if (achievement.imageId) {
        await cloudinary.uploader.destroy(achievement.imageId);
    }
    
    res.status(StatusCodes.OK).json(achievement);
}