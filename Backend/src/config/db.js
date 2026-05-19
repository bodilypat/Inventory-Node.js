//src/config/db.js 
import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI,{
            dbName: env.DB_NAME || 'inventory_db'
        });

        console.log(`Mongoose Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(" Mongoose Connection Failed", error.message);
        process.exit(1);
    }
};

export default connectDB;

