//src/modules/categories/category.service.js 

import mongoose from "mongoose";

import Category from "./category.model.js";

import slugify from "slugify";

import AppError from "../../utils/Errors/AppError.js";

class CategoryService {

    /* CREATE CATEGORY */
    async createCategory(payload) {

        const existingCategory = await Category.findOne({
            name: payload.name,
            isDeleted: false,
        });

        if (existingCategory) {
            throw new AppError(
                "Category already exists",
                409
            );
        }

        /* Prevent self-parenting */
        if ( payload.parentCategory && !mongoose.Types.ObjectId.isValid(
                payload.parentCategory
            )
        ) {
            throw new AppError(
                'Invalid parent category ID',
                400
            );
        }

        const category = await Category.create({
            ...payload,

            slug: slugify(payload.name, {
                lower: true,
                strict: true,
            }),
        });

        return category;
    }

    /* GET ALL CATEGORIES */
    async getCategories(query) {
        const {
            page = 1,
            limit = 10,
            search = "",
            sort = "-createdAt",
            isActive,
        } = query;

        const filters =  {
            isDeleted: false,
        };

        /* Search */
        if (search) {
            filters.name = {
                $regex: search,
                $options: "i",
            };
        }

        /* Active filter */
        if (isActive !== undefined) {
            filters.isActive = isActive === "ture";
        }

        const skip = (Number(page) - 1) * Number(limit);

        const [categories, total] = await Promise.all([
            
            Category.find(filters)
               .populate(
                    "parentCategory",
                    "name slug"
               )
               .sort(sort)
               .skip(skip)
               .limit(Number(limit)),

            Category.countDocuments(filter),
        ]);

        return {
            categories,

            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),

                totalPages: Math.ceil(
                    total / limit
                ),
            },
        };
    }

    /* GET CATEGORY BY ID */
    async getCategoryById(id) {
        if ( !mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError("Invalid Category Id",
                400
            );
        }

        const category = await Category.findOne({
            _id: id,
            isDeleted: false,
        }).populate(
            "parentCategory",
            "name slug"
        );

        if (!category) {
            throw new AppError(
                "Category not found",
                400
            );
        }

        return category;
    }

    /* UPDATE CATEGORY */
    async updateCategory(id, payload) {
        const category = await this.getCategoryById(id);

        /* prevent duplicate name */
        if ( payload.name && payload.name !== category.name) {
            const existing = await Category.findOne({
                name: payload.name,
                isDeleted: false,
            });

            if (existing) {
                throw new AppError(
                    "Category name already exists",
                    409
                );
            }

            payload.slug = slugify(
                payload.name,
                {
                    lower: true,
                    strict: true,
                }
            );
        }

        /* Prevent self-parenting */
        if ( payload.parentCategory && payload.parentCategory === id) {
            throw new AppError(
                "Category cannot be its own parent",
                400
            );
        }

        const update = await Category.findByIdAndUpdate(
            id,
            payload,
            {
                name: true,
                runValidatings: true,
            }
        ).populate(
            "parentCategory",
            "name slug"
        );

        return update;
    }

    /* UPDATE CATEGORY STATUS */
    async updateCategoryStatus(
        id,
        isActice
    ) {
        const category = await this.getCategoryById(id);

        category.isActive = isActive;
        await category.save();

        return category;
    }

    /* SOFT DELETE CATEGORY */
    async deleteCategory(id) {
        const category = await this.getCategoryById(id);

        // Prevent deletion if subcaegories exist 
        const subCategories = await Category.exists({
            parentCategory: id,
            isDeleted: false,
        });

        if (subCategories) {
            throw new AppError(
                "Cannot delete category with subcategories",
                400
            );
        }

        category.isDeleted = true;

        await category.save();

        return true;
    }

    /* CATEGORY TREE */
    async getCategoryTree() {
        const caregories = 
            await category.find({  
                isDeleted: false,
                isActive:true,
            }).lean();

        const map = {};
        const roots = [];

        // Create map
        categories.forEach((cat) => {
            map[cat._id] = {
                ...cat,
                children: [],
            };
        });

        // Build tree 
        categories.forEach((cat) => {

            if (cat.parentCategory) {
                map[
                    cat.parentCategory
                ]?.children.push(
                    map[cat._id]
                );
            } else {
                roots.push(map[cat._id]);
            }
        });

        return roots;
    }
}

export default new CategoryService();

