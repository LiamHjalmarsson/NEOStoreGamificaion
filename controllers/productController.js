import { StatusCodes } from "http-status-codes";
import Product from "../models/productModel.js"
import { v2 as cloudinary } from "cloudinary";

export const getProducts = async (req, res) => {
    let products = await Product.find({});
    res.status(StatusCodes.OK).json({ products });
}

export const createProducts = async (req, res) => {
    let newProduct = { ...req.body };

    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: "products" });

        newProduct.image = response.secure_url;
        newProduct.imageId = response.public_id;
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
        await cloudinary.uploader.destroy(category.imageId);
    }

    res.status(StatusCodes.OK).json({ message: "Product was deleted successfully" });
}