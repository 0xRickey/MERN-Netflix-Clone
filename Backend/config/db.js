import mongoose from "mongoose";
import { ENV_VARS } from "./env-vars.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`There was an error connecting to MongoDB ${error.message}`);
        process.exit(ENV_VARS.FAIL_CODE);
    }
}
