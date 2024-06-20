import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV !== 'development') {
    app.use(morgan("dev"));
}

app.use("*", (req, res) => {
    res.status(404).json(
        {
            message: "Not found"
        }
    );
});

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}