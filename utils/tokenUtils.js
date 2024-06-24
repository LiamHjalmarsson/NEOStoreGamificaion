import jwt from 'jsonwebtoken';

export const createJWT = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    return token;
}

export const verifyJWT = (token) => {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};

export const cookieToken = (value, res) => {
    let token = createJWT({
        userId: value._id,
    });

    let oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    return token;
}