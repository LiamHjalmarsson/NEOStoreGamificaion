import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    let message = err.message || "Something went wrong, try again"

    res.status(statusCode).json({ error: message });
}

export default errorHandlerMiddleware;

