import express from "express"
import { createBook, getAllBooks, getBook, updateBook } from "./bookController.js"
const router = express.Router()

// POST = when submit something frontend to DB
// GET = when get something from DB to frontend
// PUT = when update something in DB
// DELETE = when delete something from DB

router.post("/create-book", createBook)

router.get("/get-books", getAllBooks)

router.get("/get-book/:id", getBook)

router.put("/update/:id", updateBook)

export default router
