import Category from "../models/categoryModel.js"
import StatusCodes from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";

export const getAllCategories = async (req, res) => {
    let categories = await Category.find({});
    res.status(StatusCodes.OK).json({ categories });
}

export const createCategory = async (req, res) => {
    let newCategory = { ...req.body };

    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: "categories" });

        newCategory.image = response.secure_url;
        newCategory.imageId = response.public_id;
    }

    let category = await Category.create(newCategory);

    res.status(StatusCodes.CREATED).json(newCategory);
}

export const getCategory = async (req, res) => {
    let { id } = req.params;

    let category = await Category.findById(id);

    res.status(200).json({ category });
}

export const updateCategory = async (req, res) => {
    let newCategory = { ...req.body };

    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: "categories" });
        await fstat.unlink(req.file.path);

        newCategory.image = response.secure_url;
        newCategory.imageId = response.public_id;
    }

    let updateCategory = await Category.findByIdAndUpdate(req.params.id, newCategory);

    if (req.file && updateCategory.imageId) {
        await cloudinary.uploader.destroy(updateCategory.imageId)
    }

    res.status(StatusCodes.OK).json({ message: "category updated" });
}

export const deleteCategory = async (req, res) => {
    let { id } = req.params;
    let category = await Category.findByIdAndDelete(id);

    if (category.imageId) {
        await cloudinary.uploader.destroy(category.imageId);
    }

    res.status(StatusCodes.OK).json({ message: "Category was deleted successfully" });
}