//src/config/env.js 
import dotenv from "dotenv";

dotenv.config();

/* Environment configuration object
*  Acts as a single source of true 
*/

export const env = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || "development",

    MONGO_URI: process.env.MONGO_URI,
    DB_NAME: process.env.JWT_EXPIRES_IN || "7d",

    CLIENT_URL: process.env.CLIENT_URL || "*"
};

/* Optional: Validate critical env variables */
const requireVars = ["MONGO_URI", "JWT_SECRET"];

requiredVars.forEach((key) => {
    if (!process.env[key]) {
        console.error(` Missing environment variable: ${key}`);
        process.exit(1);
    }
});

