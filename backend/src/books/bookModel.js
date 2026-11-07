import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        requred: true,
    },
    description: {
        type: String,
        requred: true,
    },
    category: {
        type: String,
        requred: true,
    },
    trending: {
        type: Boolean,
        requred: true,
    },
    converImage: {
        type: String,
        requred: true,
    },
    oldPrice: Number,
    newPrice: Number,
    createAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
})

const Book = mongoose.model('Book', bookSchema)

export default Book