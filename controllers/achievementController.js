import { StatusCodes } from "http-status-codes";
import Achievement from "../models/achievementModel.js"

export const getAchievements = async (req, res) => {
    let achievements = await Achievement.find({});

    res.status(StatusCodes.OK).json(achievements);
}

export const createAchievement = async (req, res) => {
    let achievement = await Achievement.create(req.body);

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
    res.status(StatusCodes.OK).json(achievement);
}