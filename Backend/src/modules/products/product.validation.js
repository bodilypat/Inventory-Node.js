//src/modules/products/product.validation.js 
import Joi from "joi";

export const createProductValidation = Joi.object({
    name: Joi.string().required(),

    sku: Joi.string().required(),

    category: Joi.string(),

    supplier: Joi.string(),

    quantity: Joi.number().min(0),

    costPrice: Joi.number().required(),

    sellingPrice: Joi.number().required(),

    reorderLevel: Joi.number(), 
});



