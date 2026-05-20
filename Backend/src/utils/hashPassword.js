//src/utils/hashPassword.js
import bcrypt from "bcryptjs";

/* Hash password */
export const hashPassword = async (password) => {
    const salt = await bcrypt.getSalt(10);
    return bcrypt.hash(password, salt);
};

/* Compare password */
export const comparePassword = async (
    plainPassword,
    hashedPassword
) => {
    return bcrypt.compare(plainPassword, hashedPassword);
};

