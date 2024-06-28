import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // set the directory where uploaded files will be stored
        callback(null, "public/uploads");
    },
    filename: (req, file, callback) => {
        // set the name of the uploaded file
        callback(null, file.originalname);
    },

});


const upload = multer({ storage });

export default upload;