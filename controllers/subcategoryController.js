import { StatusCodes } from "http-status-codes";
import SubCategory from "../models/subcategoryModel.js"
import { addItemWithImage, deleteImage } from "../utils/imageUtils.js";

export const getSubcategories = async (req, res) => {
    let subcategory = await SubCategory.find({});
    res.status(StatusCodes.OK).json(subcategory);
}

export const createSubcategory = async (req, res) => {
    let newSubcategory = {...req.body }

    if (req.file) {
        newSubcategory = await addItemWithImage(req, newSubcategory, "subcategories");
    }

    let subcategory = await SubCategory.create(newSubcategory);
    res.status(StatusCodes.OK).json(subcategory);
}

export const getSubcategory = async (req, res) => {
    let subcategory = await SubCategory.findById(req.params.id);
    res.status(StatusCodes.OK).json(subcategory);
}

export const updateSubcategory = async (req, res) => {
    let subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(StatusCodes.OK).json(subcategory);
}

export const deleteSubcategory= async (req, res) => {
    let subcategory = await SubCategory.findByIdAndDelete(req.params.id);

    if (subcategory.imageId) {
        deleteImage(subcategory.imageId);
    }
    res.status(StatusCodes.OK).json(subcategory);
}