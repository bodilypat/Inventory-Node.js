//src/modules/auth/auth.routes.js 
import express from "express";

import {
    register,
    login
} from "./auth.controller.js";

/* AUTH ROUTES */
router.post("/register", register);
router.post("/login", login);
export default router;

