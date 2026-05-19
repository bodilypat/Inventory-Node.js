//src/modules/products/product.model.js 
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        sku: {
            type: String,
            required: true,
            unique: true,
        },

        barcode: {
            type: String,
            unique: true,
            sparse: true,
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },

        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Supplier",
        },

        quantity: {
            type: Number,
            default: 0,
            min: 0,
        },

        constPrice: {
            type: Number,
            required: true,
        },

        sellingPrice: {
            type: Number,
            required: true,
        },

        reorderLevel: {
            type: Number,
            default: 5,
        },
        
        image: {
            type: String,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;


