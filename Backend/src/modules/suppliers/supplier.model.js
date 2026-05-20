//src/modules/suppliers/supplier.model.js 
import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        contactPerson: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            lowerCase: true,
        },

        address: {
            type: String,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        notes: {
            type: String,
        }
    },

    {
        timestamps: true,
    }
);

supplierSchema.index({ companyName: 1 });

const Supplier = mongoose.model(
    "Supplier",
    supplierSchama
);

export default Supplier;