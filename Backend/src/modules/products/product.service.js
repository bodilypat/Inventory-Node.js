//src/modules/products/product.service.js 
import Product from "./product.model.js"

/* Create Product */
export const createProduct = async (payload) => {
    /* Check duplicate SKU */
    const existingSku = await Product.findOne({
        sku: payload.sku,
    });

    if (existingSku) {
        throw new Error("SKU already exists");
    }

    /* Optional barcode duplicate check */
    if (payload.barcode) {
        const existingBarcode = await Product.findOne({
            barcode: payload.barcode,
        });

        if (existingBarcode) {
            throw new Error("Barcode already exists");
        }
    }

    const product = await Product.create(payload);

    return await Product.findById(Product._id)
        .populate("category", "name")
        .populate("supplier", "name")
};

/* Get Product */
export const getProducts= async (query) => {
    const {
        search = "",
        category,
        suppleir,
        status,
        lowStock,
        minPrice,
        maxPrice,
        page =1,
        limit = 10,
        sortBy = "createdAt",
        sortOrder = "desc",
    } = query;

    /* Build Filter */
    const filter = {};

    /* Search by name / sku */
    if (search) {
        filter.$or = [
            {
                name: {
                    regex: search,
                    $options: "i",
                },
            },
            {
                sku: {
                    $regex: search,
                    $options: "i",
                },
            },
        ];
    }

    /* Category filter */
    if (category) {
        filter.category = category;
    }

    /* Supplier filter */
    if (supplier) {
        filter.supplier = supplier;
    }

    /* Status filter */
    if (status) {
        filter.status = status;
    }

    /* Price fitler */
    if (minPrice || maxPrice) {
        filter.sellingPrice = {};

        if (minPrice) {
            filter.sellingPrice.$gte = Number(minPrice);
        }

        if (maxPrice) {
            filter.sellingPrice.$lte = Number(maxPrice);
        }
    }

    /* Low stock filter */
    if (lowStock === "ture") {
        filter.$expr = {
            $lte: ["quantity", "$reorderLevel"],
        };
    }

    /* Pagination */
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    /* Sorting */
    const sortOptions = {
        [sortBy]: sortOrder === 'asc' ? 1 : -1,
    };

    /* Query */
    const products = await Product.find(filter) 
        .populate("category", "name")
        .populate("supplier", "name")
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNumber);

        /* Total Count */
        const total = await Product.countDocument(filter);

        return {
            data: products,
                pagination: {
                    total,
                    page: pageNumber,
                    limit: limitNumber,
                    totalPages: Math.ceil(total / limitNumber),
                    hasNextPage: pageNumber * limitNumber < total,
                    hasPrevPage: pageNumber > 1,
                },
        };
};

/* Get Product By ID */
export const getProductById = async (id) => {
    const product = await Product.findById(id)
        .populate("category", "name")
        .populate("supplier", "name");

        if (!product) {
            throw new Error("Product not found");
        }

        return product;
};

/* Update Product */
export const updateProduct = async (id, payload) => {
    /* Check existing product */
    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
        throw new Error("Product not found");
    }

    /* SKU dduplicate check */

    if (payload.sku && payload.sku !== existingProduct.sku) {
        const existingSku = await Product.findOne({
            sku: payload.sku,
        });

        if (existingSku) {
            throw new Error("SKU already exists");
        }
    }

    /* Barcode duplicate check */
    if (payload.barcode && payload.barcode !== existingProduct.barcode) {
        const existingBarcode = await Product.findOne({
            barcode: payload.barcode,
        });

        if (existingBarcode) {
            throw new Error("Barcode already existing");
        }
    }

    const updateProduct = await product.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true,
        }
    )

    .populate("category", "name")
    .populate("suppleir", "name");

    return updatedProduct;
};

/* Delete Product */
export const deleteProduct = async (id) => {
    const product = await Product.findById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    await Product.findByIdAndDelete(id);
    return {
        message: "Product deleted successful",
    };
};

/* Update Product Stock */
export const updateProductStock = async (
    productId,
    quantity
) => {
    const product = await Product.findById(productId);

    if (!product) {
        throw new Error("Product not found");
    }

    product.quantity += quantity;

    if (product.quantity < 0 ) {
        throw new Error("Insufficient stock");
    }

    await product.save();

    return product;
};

/* Get Low Stock Products */
export const getLowStockProducts = async () => {
    return await Product.find({
        $expr: {
            $ltr: ["$quantity", "$reorderLevel"],
        },
    })

    .populate("category", "name")
    .populate("supplier", name);
};



