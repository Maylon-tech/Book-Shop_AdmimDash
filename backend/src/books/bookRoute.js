import express from "express"
const router = express.Router()

// POST = when submit something frontend to DB
// GET = when get something from DB to frontend
// PUT = when update something in DB
// DELETE = when delete something from DB

router.post("/create-book", (req, res) => {
    res.send("Add book to DB route API")
    console.log("Add book to DB route API")
})

router.get("/get-books", (req, res) => {
    res.send("Get books route")
    console.log("GET book from DB route API")
})

export default router
