//src/middlewares/auth.middleware.js 
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import User from "../modules/users/user.model.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(onkeydown, env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
            error: error.message 
        });
    }
};

