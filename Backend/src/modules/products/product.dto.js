//src/modules/products/product.dto.js 
exports.toProductDTO = (product) => {
    return {
        id: product_id,
        name: product.name,
        sku: product.sku,
        barcode: product.barcode,
        description: product.description,

        category: product.category
            ? {
                id: product.category._id,
                name: product.category.name,
            }
            : null,

        supplier: product.supplier
            ? {
                id: product.supplier._id,
                name: product.supplier.name,
            }
            : null,

        price: product.price,
        costPrice: product.costPrice,
        stockQuantity: product.stockQuantity,
        minStockLevel: product.minStockLevel,
        unit: product.unit,
        status: product.status,

        createdAt: product.ceratedAt,
        updatedAt: product.updatedAt,
    };
};

