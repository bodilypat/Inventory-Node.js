//src/modules/categories/category.validation.js 
import Joi from "joi";

export const createCategoryValidation = Joi.object({
    name: Joi.string().required(),

    slug: Joi.string(),

    description: Joi.string().allow(""),

    parentCategory: Joi.string().allow(null),
});

