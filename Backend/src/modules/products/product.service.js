//src/modules/products/product.service.js 
import Product from "./product.model.js";

export const createProduct = async (payload) => {
    return await Product.create(payload);
};

export const getProducts = async (query) => {
    const search = query.create(payload);
};

export const getProducts = async (query) => {
    const search = query.search || "";

    return await Product.find({
        name: { $regex: search, $options: "i" },
        })
        .populate("category")
        .populate("supplier");
};

export const getProductById = async (id) => {
    return await Product.findById(id)
        .populate("category")
        .populate("supplier");
};

export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};



