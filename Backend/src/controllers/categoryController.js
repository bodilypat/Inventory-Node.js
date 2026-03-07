//src/controllers/categoryController.js 

const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res, next) => {
    try {
        const purchase = await categoryService.createCategory(req.body);

        res.status(201).json({
            success: true,
            message: 'Category created successfully',
            data: purchase
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();

        res.status(200).json({
            success: true,
            message: 'Categories retrieved successfully',
            data: categories
        });
    } catch (error) {
        next(error);
    }   
};

exports.getCategoryById = async (req, res, next) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Category retrieved successfully',
            data: category
        });
    } catch (error) {
        next(error);
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Category updated successfully',
            data: category
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully',
            data: category
        });
    } catch (error) {
        next(error);
    }
};

