//src/app/server.js 
import app from "./app.js";
import connectDB from "../config/db.js";
import { loadEnv } from "../config/env.js";

/* Load environment variables */
loadEnv();

/* Connect to MngoDB */
connectDB();

const PORT = ProcessingInstruction.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
