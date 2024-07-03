import Category from "../models/categoryModel.js"
import StatusCodes from "http-status-codes";
import { addItemWithImage, deleteImage, updateImage } from "../utils/imageUtils.js";

export const getAllCategories = async (req, res) => {
    let categories = await Category.find({});
    res.status(StatusCodes.OK).json({ categories });
}

export const createCategory = async (req, res) => {
    let newCategory = { ...req.body }

    if (req.file) {
        newCategory = await addItemWithImage(req, newCategory, "categories");
    }

    let category = await Category.create(newCategory);

    res.status(StatusCodes.CREATED).json(category);
}

export const getCategory = async (req, res) => {
    let { id } = req.params;

    let category = await Category.findById(id);

    res.status(200).json({ category });
}

export const updateCategory = async (req, res) => {
    let newCategory = { ...req.body };

    if (req.file) {
        newCategory = updateImage(req, newCategory, "categories");
    }

    let updateCategory = await Category.findByIdAndUpdate(req.params.id, newCategory);

    if (req.file && updateCategory.imageId) {
        deleteImage(updateCategory.imageId)
    }

    res.status(StatusCodes.OK).json({ message: "category updated" });
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params;
    let category = await Category.findByIdAndDelete(id);

    if (category.imageId) {
        deleteImage(category.imageId)
    }

    res.status(StatusCodes.OK).json({ message: "Category was deleted successfully" });
}