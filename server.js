import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// Middleware
import errorHandlerMiddleware from './middleware/ErrorHandlerMiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';

// Routers
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import rankRouter from "./routes/rankRouter.js";
import achievementRouter from "./routes/achievementRouter.js";

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/user", authenticateUser, userRouter);
app.use("/api/rank", rankRouter);
app.use("/api/achievement", achievementRouter);

app.use("*", (req, res) => {
    res.status(404).json(
        {
            message: "Not found"
        }
    );
});

app.use(errorHandlerMiddleware);

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