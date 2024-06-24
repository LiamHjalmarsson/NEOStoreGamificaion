import { UnauthorizedError } from '../errors/customErrors.js';

export const authenticateUser = async (req, res, next) => {
    let { token } = req.cookies;
    if (!token) {
        throw new UnauthorizedError('authentication invalid');
    }
    next();
};