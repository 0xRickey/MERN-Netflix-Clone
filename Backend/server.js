import express from "express"

import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use("/api/v1/auth/", authRoutes)

app.listen(4269, () => {
    console.log("Server started at http://localhost:4269")
})

