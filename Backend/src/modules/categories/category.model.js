//src/modules/categories/category.model.js 
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },
        
        description: {
            type: String,
        }, 

        parentCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            default: true,
        },

        isActive: {
            type: boolean,
            default: true,
        },
    },
    {
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.index({ name: 1 });

const Category = mongoose.moel(
    "Category",
    categorySchema 
);

export default Category;

