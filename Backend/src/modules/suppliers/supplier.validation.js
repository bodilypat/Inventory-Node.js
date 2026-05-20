//src/modules/suppliers/supplier.validation.js 
import Joi from "joi";

export const createSupplierValidation = Joi.object({
    companyName: Joi.string().required(),

    contactPerson: Joi.string().required(),

    email: Joi.string().email(),

    phone: Joi.string().required(),

    address: Joi.string().allow(""),
    
    textNumber: Joi.string().allow(""),

    notes: Joi.string().allow(""),
});

