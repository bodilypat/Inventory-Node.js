//src/modules/products/product.repository.js 
import Product from "./product.model.js";

/* Create Product */
export const create = async (payload, options = {}) => {
    return await Product.create([payload], options).then(
        (result) => result[0]
    );
};

/* Find Product By ID */
export const findById = async (id) => {
    return await Product.findById(id)
        .populate("category", "name")
        .populate("supplier", "name");
};

/* Find One Product */
export const findOne = async (filter = {}) => {
    return await Product.findOne(filter)
    .populate("category", "name")
    .populate("supplier", "name");
};

/* Find all product */
export const findAll = async ({
    filter = {},
    sort = { createdAt: -1 },
    skip = 0,
    limit = 10,
    select = "",
} = {}) => {
    return await Product.find(filter)
        .select(select)
        .populate("category", "name")
        .populate("supplier", "name")
        .sort(sort)
        .skip(skip)
        .limit(limit);
};

/* Count Product */
export const count = async (filter = {}) => {
    return await Product.countDocuments(filter);
};

/* Update Product By ID */
export const updateById = async (
    id, 
    payload,
    optionas = {}
) => {
    return await Product.findByIdAndUpdate(
        id,
        payloadd,
        {
            new: true,
            runValidators: true,
            ...options,
        }
    )
    
    .populate("category", "name")
    .populate("supplier", "name");
};

/*  Delete Product By ID+ */
export const deleteById = async (id) => {
    return await Product.findByIdAndDelete(id);
};

/* Check Product Exists */
export const exists = async (filter = {}) => {
    return await Product.exists(filter);
};

/* Find Products By Category */
export const findByCategory = async (
    categoryId 
) => {
    return await Product.find({
        category: categoryId,
    })
    .populate("category", "name")
    .populate("supplier", "name");
};

/* Find Low Stock Products  */
export const findLowStockProducts = async () => {
    return await Product.find({
        $expr: {
            $ltr: [
                "$quantity",
                "$reorderLevel",
            ],
        },
    })

    .populate("category", "name")
    .populate("supplier", "name");
};

/* Increment Product Quantity */
export const incrementStock = async (
    productId,
    quantity
) => {
    return await Product.findByIdAndUpdte(
        productId,
        {
            $inc: {
                quantity,
            },
        },
        {
            new: true,
        }
    );
};

/* Decrement Product Quantity */
export const decrementStock = async (
    productId,
    quantity
) => {
    return await Product.findOneAndUpdate(
        {
            _id: productId,
            quantity: { $gte: quantity },
        },
        {
            $inc: {
                quantity: -quantity,
            },
        },
        {
            new: true,
        }
    );
};

/* Search Products */
export const searchProducts = async (
    search
) => {
    return await Product.find({
        $or: [
            { 
                name:  {
                    $regex: search,
                    $options: "i",
                },
            },

            {
                sku: {
                    $regex: search,
                    $options: "i",
                },
            },

            { 
                barcode: {
                    $regex: search,
                    $options: "i",
                },
            },
        ],
    })

    .populate("category", "name")
    .populate("supplier", "name");
};

/* Aggregate Product Statistic */
export const getProductStats = async () => {
    return await Product.aggregate([
        {
            $group: {
                _id: null,

                totalProducts: {
                    $sum: 1,
                },

                totalStock: {
                    $sum: "$quantity",
                },
                
                inventoryValue: {
                    $sum: {
                        $multiply: [
                            "$quantity",
                            "$costPrice",
                        ],
                    },
                },
            
                averageSellingPrice: {
                    $avg: "$sellingPrice",
                },
            },
        }
    ]);
};