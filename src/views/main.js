import { Link } from "react-router-dom";

import BookShelf from "../components/bookShelf";
const Main = ({ updateShelfs, bookShelfs }) => {
    // const books = bookShelfs ? bookShelfs.filter(booksh => booksh.shelf === "currentlyReading") : []
    // console.log(books);
    // const currentlyReading = books.map((book)=>(
    //     <li  key={book.id}>
    //         <Book book={book}/>
    //     </li>
    // ))
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookShelf bookShelfType="currentlyReading" bookShelfs={bookShelfs} updateShelfs={updateShelfs}/>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <BookShelf bookShelfType="wantToRead" bookShelfs={bookShelfs} updateShelfs={updateShelfs}/>
            
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookShelf bookShelfType="read" bookShelfs={bookShelfs} updateShelfs={updateShelfs}/>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Main;
