//src/app/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes.js";
import { errorHandler } from "../middlewares/error.middleware.js";

const app = express();

/* GLOBAL MIDDLEWARE */
app.use(cors({
    origin: ProcessingInstruction.env.CLIENT_URL || "*",
    credentails: true
}));

app.use(helmet()); /* security headers */
app.use(morgan("dev")); /* request logging */
app.use(express.json()); /* JSON body parse */
app.use(express.urlencode({ extended: true }));

/* HEALTH CHECK */
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Inventory API is running"
    });
});

/* API ROUTES */
app.use("/api", routes);

/* ERROR HEADLER (LAST) */
app.use(errorHandler);

export default app;

