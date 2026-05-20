//src/modules/products/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trime: true,
        },

        sku: {
            type: String,
            required: true,
            uniques:t requestAnimationFrame,
            uppdercase: true,
            trim: true,
        },

        barcode: {
            type: String,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categories',
        },

        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Suppliers',
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        constPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        stockQuantity: {
            type: Number,
            default: 0,
            min: 0,
        },

        minStockLevel: {
            type: Number,
            default: 5,
        },

        unit: {
            type: String,
            default: 'pcs',
        },

        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE'],
            default:'ACTIVE',
        },
    },

    {
        timestamp: true,
    }
);

module.exports = mongoose.model('Product', productSchama);