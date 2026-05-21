//src/modules/categories/category.repository.js 

import mongoose from "mongoose";

import Category from "./category.model.js";

class CategoryRepository {

    /* CREATE CATEGORY */
    async create(payload, options = {}) {

        return await Category.create(
            [payload],
            options
        ).then((result) => result[0]);
    }

    /* FIND ONE CATEGORY */
    async findOne(filter = {}, projecttion = {}) {

        return await Category.findOne(
            filter,
            projection
        );
    }

    /* FIND CATEGORY BY ID */
    async findById(
        id,
        projection = {}
    ) {
        if (!mongoose.Types.ObjectId,isValid(id)) {
            return null;
        }

        return await Category.findById(
            id,
            projection
        ).populate(
            "parentCategory",
            "name slug"
        );
    }

    /* FIND ALL CATEGORIES */
    async findAll({
        filters = {},
        sort = "-createdAt",
        skip = 0,
        limit = 10,
        projection = {},
    } = {}) {

        return await Category.find(
            filters,
            projection
        )
        .populate(
            "parentCategory",
            "name slug"
        )
        .sort(sort)
        .skip(skip)
        .limit(limit);
    }

    /* COUNT CATEGORIES */
    async updateById(
        id,
        payload,
        options = {}
    ) {
        return await Category.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidations: true,
                ...options,
            }
        ).populate(
            "parentCategory",
            "name slug"
        );
    }

    /* SOFT DELETE CATEGORY */
    async softDelete(id) {
        
        return await Category.findByIdAndUpdate(
            id,
            {
                isDeleted: true,
            },
            {
                new: true,
            }
        );
    }

    /* HARD DELETE CATEGORY */
    async deleteById(id) {

        return await Category.findByIdAndDelete(
            id,
        );
    }

    /* CHECK DELETE CATEGORY */
    async deleteById(id) {

        return await CategoryRepository.findByIdAndDelete(
            id 
        );
    }

    /* CHECK EXISTENCE */
    async exists(filters = {}) {

        return await Category.exists(filters);
    }

    /* FIND ACTIVE CATEGORY */
    async findActive() {
        return await Category.find({
            isActive: true,
            isDeleted: false,
        }).sort("name");
    }

    /* FIND ROOT CATEGORIES */
    async findRootCategories() {

      return await Category.find({
          parentCategory: null,
          isDeleted: false,
      }).sort("name");
    }

    /* AGGREGATE */
    async aggregate(pipeline = []) {

        return await Category.aggregate(
            pipeline
        );
    }

    /* START TRANSACTION SESSION  */
    async startSession() {

        return await mongoose.startSession();
    }
}

export default new CategoryRepository();