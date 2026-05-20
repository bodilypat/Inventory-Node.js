//src/modules/products/product.validation.js 
import Joi from "joi";


/* Common reusable fields */

const objected = Joi.string()
    .hex()
    .length(24)
    .message({
        "string.hex": "Invalid MongoDB ObjectId format",
        "string.length": "ObjectId must be 24 characters long",
    });

    const priceField = Joi.number()
        .precision(2)
        .min(0)
        .message({
            "number.base": "Quantity must be a number",
            "number.integer": "Quantity must me an integer",
            "number.min": "Quantity cannot ne negative",
        });

        /* Create Product Validation */
    export const createProductValidation = Joi.object({
        name: Joi.string()
            .trim()
            .min(2)
            .max(120)
            .required()
            .message({
                "string.empty": "Product name is required",
                "string.min": "Product name must be at least 2 characters"
                "string.max": "Product name cannot exceed 120 characters",
            }),

            sku: Joi.string()
                .trim()
                .uppercase()
                .min(3)
                .max(30)
                .required()
                .pattern(/^[A-Z0-9-_]+$/)
                .message({
                    "string.empty": "SKU is required",
                    "string.pattern.base": "SKU can only contain uppercase letters, numbers, hyphens, and underscores",            
                }),
            
            barcode: Joi.string()
                    .trim()
                    .allow("", null)
                    .max(100)
                    .message({
                       "string.max": "Description cannot exceed 1000 characters",
                    }),
                
            category: objectId.required().messages({
                    "any.required": "Category is required",
                }),

            supplier: objectId.allow(null),

            quantity: quantityField.default(0),

            reorderLevel: quantityField.default(5),

            costPrice: priceField.required().message({
                    "any.required": "Cost price is required",
                }),

            sellingPrice: priceField
                .required()
                .greater(Joi.ref("costPrice"))
                .messages({
                    "any.required": "Selling price is required",
                    "number.greater":
                    "Selling price must be greater than cost price",
                }),
            unit: Joi.string()
                .trim()
                .valid("pcs", "kg", "g", "ml", "box", "pack")
                .default("pcs")
                .message({
                    "any.only": "Invalid unit type",
                }),
            status: Joi.string()
                .valid("ACTIVE", "INACTIVE")
                .default("ACTIVE"),

            expiryDate: Joi.date()
            .greater("now")
            .allow(null)
            .message({
                "date.greater": "Expiry date must be in the future",
            }),
    });

    /* Update Product Validation */

    export const updateProductValidation = Joi.object({
        name: Joi.string().trim().min(2).max(120),

        sku: Joi.string()
            .trim()
            .uppercase()
            .min(3)
            .max(3)
            .pattern(/^[A-Z0-9-_]+$/),

        barcode: Joi.string().trim().allow("", null),

        description: Joi.string().trim().allow("", null),

        category: objectId,

        supplier: objectId.allow(null),

        quantity: quantityField,

        reorderLevel: quantityField,

        costPrice: priceField,

        sellingPrice: priceField,

        unit: Joi.string().value(
            "pcs",
            "kg",
            "g",
            "ltr",
            "ml",
            "box",
            "pack",
        ),

        status: Joi.string().value("ACTIVE", "INACTIVE"),

        expiryDate: Joi.date().allow(null),
    })

    .min(1)
    .message({
        "object.min": "At least one field is required for update",
    });

    /* Query Validation */
    export const productQueryValidation = Joi.object({
        page: Joi.number().integer().min(1).default(1),

        limit: Joi.number().integer().min(1).max(100).default(10),

        search: Joi.string().trim().allow("", null),

        category: objectId,

        supplier: objectId,

        status: Joi.string().valid("ACTIVE", "INACTIVE"),

        minPrice: Joi.number().min(0),

        maxPrice: Joi.number().min(0),

        lowStock: Joi.boolean(),
    });

    