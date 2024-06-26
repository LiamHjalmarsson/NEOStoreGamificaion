import { StatusCodes } from "http-status-codes";
import Rank from "../models/rankModel.js"

export const getRanks = async (req, res) => {
    let ranks = await Rank.find({});
    res.status(StatusCodes.OK).json(ranks);
}

export const createRank = async (req, res) => {
    let rank = await Rank.create(req.body);
    res.status(StatusCodes.OK).json(rank);
}

export const getRank = async (req, res) => {
    let rank = await Rank.findById(req.params.id);
    res.status(StatusCodes.OK).json(rank);
}

export const updateRank = async (req, res) => {
    let rank = await Rank.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(StatusCodes.OK).json(rank);
}

export const deleteRank = async (req, res) => {
    let rank = await Rank.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json(rank);
}