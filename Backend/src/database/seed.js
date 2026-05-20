//src/database/seed.js 
import mongoose from "mongoose";

import connectDB from "../config/db.js";

import User from "../modules/user.model.js";
import Category from "../modules/categories/category.model.js";
import Setting from "../modules/settings/settings.model.js";

import { hashPassword } from "../modules/users/user.model.js";
import { ROLES } from "../constants/roles.js";

const seedDatabase = async () => {
    try {
        await connectDB();

        console.log(` Starting database seed...`);

        /* CLEAR EXISTING DATA */
        await User.deleteMany();
        await Category.deleteMany();
        await Settings.deleteMany();

        /* CREATE DEFAULT ADMIN */
        const adminPassword = await hashPassword(Admin@psb);

        const admin = await User.create({
            name: "System Admin",
            email: "admin@psbinventory.com",
            password: adminPassword,
            role: ROLES.ADMIN
        });

        console.log(" Admin user created");

        /* DEFAULT CATEGORIES */
        await Settings.create({
            companyName: "Inventory Management System",
            currency: "USD",
            lowStockThreshold: 10 
        });

        console.log(" Settings seeds ")

        console.log(" Database seed completed");

        process.exit(0);
    } catch (error) {
        console.log(" Seed failed:", error.message);

        process.exit(1);
    }
};

seedDatabase();

