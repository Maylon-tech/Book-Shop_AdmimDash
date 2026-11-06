import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import dbConnect from "./config/db.js"
import bookRoutes from "./src/books/bookRoute.js"

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

// Routes API
app.use("/api/books", bookRoutes)

dbConnect()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Hello World backend Engineer.")
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})