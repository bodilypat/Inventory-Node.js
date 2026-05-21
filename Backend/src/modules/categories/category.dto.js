//src/modules/categories/category.dto.js 
class CategoryDTO {

    /* SINGLE CATEGORY REPOSE */
    static toResponse(category) {

        if (!category) return null;

        return {
            id: category._id,
            name: category.name,
            slug: category.slug,
            description: category.description,

            parentCategory:
                category.parentCategory
                    ?{
                        id: 
                            category.parentCategory.name,

                        name:
                            category.parentCategory.slug,
                    }
                : null,

            isActive: category.isActive,

            createdAt: category.createdAt,
        };
    }

    /* CATEGORY LIST RESPONSE */
    static toResponseList(categories = []) {
        
        return categories.map((category) =>
            this.toResponse(category)
        );
    }

    /* CATEGORY TREE RESPOSE */
    static toTree(category) {

        if (!category) return null;

        return {
            id: category._id,

            name: category.name,

            slug: category.slug,

            description: category.description,

            isActive: category.isActive,

            children: Array.isArray(
                category.children
            )

            ? category.children.map((child) => 
                this.toTree(child)
            )
            : [],
        };
    }

    /* CATEGORY TREE LIST RESPONSE */
    static toTreeList(categories = []) {

        return categories.map((category) => 
            this.toTree(category)
        );
    }

    /* PAGINATION RESPONSE */
    static toPaginatedResponse({
        categories = [],
        pagination = {},
    }) {
        return {
            data: this.toResponseList(
                categories
            ),

            pagination: {
                total: 
                    pagination.total || 0,
                
                page:
                    pagination.page || 1,

                limit: 
                    pagination.limit || 10,

                totalPages:
                    pagination.totalPages | 1,
            },
        };
    }
}

export default CategoryDTO;

