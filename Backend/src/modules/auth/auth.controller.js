//src/modules/auth/auth.controller.js  

import {
  registerUser,
  loginUser
} from "./auth.service.js";

import {
  successResponse,
  errorResponse
} from "../../utils/responseHandler.js";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import {
  registerValidation,
  loginValidation
} from "./auth.validation.js";

import { HTTP_STATUS }
from "../../constants/httpStatus.js";

export const register = asyncHandler(async (req, res) => {

  const { error } =
    registerValidation.validate(req.body);

  if (error) {
    return errorResponse(
      res,
      error.details[0].message,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  const result = await registerUser(req.body);

  return successResponse(
    res,
    result,
    "User registered successfully",
    HTTP_STATUS.CREATED
  );
});

export const login = asyncHandler(async (req, res) => {

  const { error } =
    loginValidation.validate(req.body);

  if (error) {
    return errorResponse(
      res,
      error.details[0].message,
      HTTP_STATUS.BAD_REQUEST
    );
  }

  const result = await loginUser(req.body);

  return successResponse(
    res,
    result,
    "Login successful",
    HTTP_STATUS.OK
  );
});