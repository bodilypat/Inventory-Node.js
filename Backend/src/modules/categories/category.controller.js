//src/modules/categories/category.controller.js 
export const createCategory = async (
    req,
    res,
    next
) => {
    try {
        const category = await categoryService.createCategory(req.body);

        res.status(201).json({
            success: true,
            data: category,
        });
    } catch (error) {
        next(error);
    }
};

export const getCategories = async (
    req, 
    res,
    next
) => {
    try {
        const categories = await categoryService.getCategories();

        res.status(200).json({
            success: true,
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};

