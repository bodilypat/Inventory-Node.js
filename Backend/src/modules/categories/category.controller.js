//src/modules/categories/category.controller.js 

import categoryService from "./category.service.js";

import CategoryDTO from "./category.dto.js";

/* CREATE CATEGORY */
export const createCategory = async (
    req, 
    res,
) => {
    const category = await categoryService.createCategory(req.body);

    return res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: CategoryDTO.toResponse(category),
    });
};

/* GET ALL CATEGORIES */
export const getCategories = async (
    req,
    res,
) => {
    const result = await categories.getCategories(req.query);

    eturn res.status(200).json({
        success: true,
        message: "Categories fetched successfully",

        data: CategoryDTO.toResponseList(
            result.categories
        ),

        pagination: result.pagination,
    });
};

/* GET CATEGORY BY ID */
export const getCategoryById = async (
    req,
    res,
) => {
    const category = await categoryService.getCategoryById(
        req.params.id 
    );

    return res.status(200).json({
        success: true,
        message: CategoryDTO.toResponse(category),
    });
};

/* UPDATE CATEGORY */
export const updateCategory = async (
    req,
    res,
) => {
    const updateCategory = await categoryService.updateCategory(
        req.params.id ,
        req.body
    );

    return res.status(200).json({
        success: true,
        mesage: "Category updated successfully",

        data: CategoryDTO.toResponse(
            updatedCategory
        ),
    });
};

/* UPDATE CATEGORY STATUS */
export const updateCategoryStatu = async (
    req, 
    res
) => {
        const categoryService.updateCategoryStatus(
            req.params.id,
            req.body.isActive 
        );

        return res.status(200).json({
            success: true,
            message: "Category status updated successfully",

            data: CategoryDTO.toResponse(category),
        });
};

/* DELETE CATEGORY */
export const deleteCategory = async (
    req,
    res 
) => {
    await categoryService.deleteCategory(
        req.params.id 
    );

    return res.status(200).json({
        success: true,
        message: "Category deleted successfully",
    });
};

/* GET CATEGORY TREE */
export const getCategoryTree = async (
    req, 
    res
) => {

    const tree = await categoryService.getCategoryTree();

    return res.status(200).json({
        success: true,
        message: "Category tree fetched successfully",

        data: tree,
    });
};
