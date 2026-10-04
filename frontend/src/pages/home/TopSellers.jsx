import { useEffect, useState } from "react"

const categories = ["fiction", "horror", "business", "history", "science", "technology", "romance", "thriller", "mystery", "biography"]

const TopSellers = () => {
  const [books, setBooks] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre")

  useEffect(() => {
    fetch("books.json")
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])

  const filteredBooks = selectedCategory === "Choose a genre" 
  ? books
  : books.filter(book => book.category === selectedCategory)

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select 
          name="category" 
          id="category" 
          className="border bg-[#eaeaea] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {
            categories.map((category, index) => (
              <option 
                key={index}
                value={category}
              >
                {category}
              </option>
            ))
          }
        </select>
      </div>
      {
        filteredBooks.map((book,index) => (
          <div key={index} className="mb-4">
            {book.title}
          </div>
        ))
      }
    </div>
  )
}

export default TopSellers
