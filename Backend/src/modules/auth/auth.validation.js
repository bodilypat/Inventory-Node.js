import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().required(),
});

const validateRegister = (payload) =>
  registerSchema.validate(payload, { abortEarly: false, stripUnknown: true });

const validateLogin = (payload) =>
  loginSchema.validate(payload, { abortEarly: false, stripUnknown: true });

module.exports = {
  validateRegister,
  validateLogin,
};

