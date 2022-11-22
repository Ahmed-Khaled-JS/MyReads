import Book from "./book"
const BookShelf = ({ updateShelfs, bookShelfs,bookShelfType }) => {
    return (
        <>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {Array.isArray(bookShelfs) && (bookShelfs.filter(booksh => booksh.shelf === bookShelfType).map((book) => (
                    <li  key={book.id}>
                           <Book updateShelfs={updateShelfs} book={book}/>
                     </li>
                )))
            }
              </ol>
            </div>
        </>
    )
}
export default BookShelf