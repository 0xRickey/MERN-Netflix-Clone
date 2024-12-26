import dotenv from "dotenv"

dotenv.config()

export const ENV_VARS = {
    MONGO_URI : process.env.MONGO_URI,
    PORT: process.env.PORT || 4269,
    SUCCESS_CODE: 0,
    FAIL_CODE: 1
}