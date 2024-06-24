import Category from "../models/categoryModel.js"
import StatusCodes from "http-status-codes";

export const getAllCategories = async (req, res) => {
    let categories = await Category.find({});
    res.status(StatusCodes.OK).json({ categories });
}

export const createCategory = async (req, res) => {
    let category = await Category.create(req.body);
    res.status(StatusCodes.CREATED).json({ category });
}

export const getCategory = async (req, res) => {
    let { id } = req.params;
    let category = await Category.findById(id);

    res.status(200).json({ category });
}

export const updateCategory = async (req, res) => {
    let { id } = req.params;
    let updateCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });

    res.status(StatusCodes.OK).json({ updateCategory });
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params;
    await Category.findByIdAndDelete(id);

    res.status(StatusCodes.OK).json({ message: "Category was deleted successfully" });
}