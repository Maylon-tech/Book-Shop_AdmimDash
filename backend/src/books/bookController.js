
import Book from "./bookModel.js"

// Frontend => backend Server => [API].. Controller_logic => Doc_Schema => Database Query => Res_ to server process => ShowUp on Frontend User..



export const createBook = async(req, res) => {
    try {
        const newBook = await Book({...req.body})
        await newBook.save()
        res.status(200).send({ message: "Book posted successfully..", book: newBook })
    } catch(error) {
        console.error("Error posting book", error)
        res.status(500).send({ message: "Failed to create book" })
    }
}


export const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find().sort({ createAt: -1 })
        
        res.status(200).send({ message: "Getting all books at once.", books })
    } catch(error) {
        console.error("Error Getting all books", error)
        res.status(500).send({ message: "Failed fetch all books." })
    }
    
}

export const getBook = async(req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if(!book) {
            res.status(404).send({ message: "Book not Found." })
        }
        res.status(200).send({ message: "Your Book found it.", book})
    } catch(error) {
        console.error("Error Getting the only one book", error)
        res.status(500).send({ message: "Failed fetch book." })
    }
}

export const updateBook = async(req, res) => {
    try {   
        const { id } = req.params
        const updateBook = await Book.findByIdAndUpdate(id)

        res.status(200).send({ message: "Your Book has been updated.", updateBook})
    } catch(error) {
        console.error("Error Updating the book from ID.", error)
        res.status(500).send({ message: "Failed to update book." })
    }
}