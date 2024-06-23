import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    let salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
    let isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}