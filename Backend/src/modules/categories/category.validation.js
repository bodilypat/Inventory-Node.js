// src/modules/categories/category.validation.js

import Joi from "joi";

import mongoose from "mongoose";

/* COMMON VALIDATIONS */

const objectId = Joi.string().custom(
  (value, helpers) => {
    if (
      !mongoose.Types.ObjectId.isValid(
        value
      )
    ) {
      return helpers.error(
        "any.invalid"
      );
    }
    return value;
  },
  "ObjectId Validation"
);

 /* CREATE CATEGORY VALIDATION */

export const createCategorySchema = Joi.object(
  {
    name: Joi.string()
      .min(2)
      .max(100)
      .required()
      .trim(),

    description: Joi.string()
      .max(500)
      .allow("")
      .optional(),

    parentCategory: objectId.allow(null),

    isActive: Joi.boolean().optional(),
  }
);

 /* UPDATE CATEGORY VALIDATION */

export const updateCategorySchema = Joi.object(
  {
    name: Joi.string()
      .min(2)
      .max(100)
      .trim(),

    description: Joi.string()
      .max(500)
      .allow("")
      .optional(),

    parentCategory: objectId.allow(null),

    isActive: Joi.boolean(),
  }
).min(1);

/* GET CATEGORY BY ID VALIDATION */

export const getCategoryByIdSchema = Joi.object(
  {
    id: objectId.required(),
  }
);

/* DELETE CATEGORY VALIDATION */

export const deleteCategorySchema = Joi.object(
  {
    id: objectId.required(),
  }
);

/*  UPDATE STATUS VALIDATION */

export const updateCategoryStatusSchema = Joi.object(
  {
    isActive: Joi.boolean().required(),
  }
);

/* CATEGORY QUERY VALIDATION */

export const categoryQuerySchema = Joi.object(
  {
    page: Joi.number()
      .integer()
      .min(1)
      .default(1),

    limit: Joi.number()
      .integer()
      .min(1)
      .max(100)
      .default(10),

    search: Joi.string()
      .allow("")
      .optional(),

    isActive: Joi.boolean().optional(),

    sort: Joi.string().default(
      "-createdAt"
    ),
  }
);