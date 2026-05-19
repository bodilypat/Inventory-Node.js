//src/modules/categories/category.service.js 
import Category from "./category.model.js";

export const createCategory = async (payload) => {
    return await Category.create(payload);
};

export const getCategories = async () => {
    return await Category.find()
        .populate("parentCategory");
};

export const getCategoryById = async(id) => {
    return await Category.findById(id)
        .populate('parentCategory');
};

export const updateCategory = async (
    id,
    payload
) => {
    return await Category.findByIdAndUpdate(
        id,
        payload,
        {new: true }
    );
};

export const deleteCategory = async(id) => {
    return await Category.findByIdAndDelete(id);
};


