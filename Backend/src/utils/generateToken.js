//src/utils/generateToken.js 
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const generateToken = (payload) => {
    return jwt.sign(payload, env.JWT_SECRET, {
        expiratesIn: env.JWT_EXPIRES_IN || '7d'
    });
};

