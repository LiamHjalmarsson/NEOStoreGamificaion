import { StatusCodes } from "http-status-codes";
import Product from "../models/productModel.js"
import { addItemWithImage, deleteImage } from "../utils/imageUtils.js";

export const getProducts = async (req, res) => {
    let products = await Product.find({});
    res.status(StatusCodes.OK).json({ products });
}

export const createProducts = async (req, res) => {
    let newProduct = { ...req.body };

    if (req.file) {
        newProduct = await addItemWithImage(req, newProduct, "product");
    }

    await Product.create(newProduct);

    res.status(StatusCodes.CREATED).json(newProduct);
}

export const getProduct = async (req, res) => {
    let { id } = req.params;

    let product = await Product.findById(id);
    res.status(StatusCodes.OK).json({ product });
}

export const updateProduct = async (req, res) => {
    let { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body, { new: true });

    res.status(StatusCodes.OK).json({ product });
}

export const deleteProduct = async (req, res) => {
    let { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    if (product.imageId) {
        deleteImage(product.imageId);
    }

    res.status(StatusCodes.OK).json({ message: "Product was deleted successfully" });
}