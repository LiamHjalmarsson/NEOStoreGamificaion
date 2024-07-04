import { v2 as cloudinary } from "cloudinary";
import { promises as fs } from "fs";

export const addItemWithImage = async (req, obj, folderName, width = 800, height=600) => {
    let response = await cloudinary.uploader.upload(req.file.path, { folder: folderName, width, height, crop: "limit" });
    await fs.unlink(req.file.path);

    obj.image = response.secure_url;
    obj.imageId = response.public_id;

    return obj;
}

export const deleteImage = async (id) => {
    await cloudinary.uploader.destroy(id);
}

export const updateImage = async (req, obj, folderName) => {
    let response = await cloudinary.uploader.upload(req.file.path, { folder: folderName });
    await fstat.unlink(req.file.path);

    obj.image = response.secure_url;
    obj.imageId = response.public_id;

    return obj;
}