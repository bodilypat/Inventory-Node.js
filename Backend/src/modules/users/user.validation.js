//src/modules/users/user.validation.js
import Joi from "joi";

export const createUserValidation = Joi.object({
    name: Joi.string().required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required(),

    role: Joi.string()
        .valid("admin", "manager", "staff"),
});


