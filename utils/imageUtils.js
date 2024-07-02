import { v2 as cloudinary } from "cloudinary";

export const addItemWithImage = async (req, obj, folderName) => {
    if (req.file) {
        let response = await cloudinary.uploader.upload(req.file.path, { folder: folderName });
        obj.image = response.secure_url;
        obj.imageId = response.public_id;

        return obj;
    }
}

export const deleteImage = async (id) => {
    if (id) {
        await cloudinary.uploader.destroy(id);
    }
}