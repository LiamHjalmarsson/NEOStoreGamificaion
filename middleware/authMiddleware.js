import { UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
    let { token } = req.cookies;
    if (!token) {
        throw new UnauthorizedError('authentication invalid');
    }

    try {
        let { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        next();
    } catch (error) {
        throw new UnauthorizedError('authentication invalid');
    }
};

export const authorizePermission = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('authentication invalid');
            next();
        }
        next();
    }
}