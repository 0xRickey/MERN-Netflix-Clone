import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("Server is Ready!")
})

app.listen(4269, () => {
    console.log("Server started at http://localhost:4269")
})

