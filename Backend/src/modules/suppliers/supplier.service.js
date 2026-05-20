//src/modules/suppliers/supplier.service.js 
import Supplier from "./supplier.model.js";

export const createSupplier = async (
    payload
) => {
    return await Supplier.create(payload);
};

export const getSuppliers = async (
    query 
) => {
    const search = query.search || "";

    return await Supplier.find({
        companyName: {
            $regex: search,
            $options: "i",
        }
    });
};

export const getSupplierById = async (
    id 
) => {
    return await Supplier.findById(id);
};

export const updateSupplier = async (
    id,
    payload,
) => {
    return await Supplier.findByIdAndUpdate(
        id,
        payload,
        { new: true }
    );
};

export const deleteSupplier = async (
    id
) => {
    return await Supplier.findByIdAndDelete(id);
};

