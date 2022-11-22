import { Link } from "react-router-dom";
import { useState } from "react";
import searchImage from "../icons/77218-search-imm.gif";
import * as BookAPI from "../BooksAPI";
import Book from "../components/book";

const SearchPage = ({updateShelfs, bookShelfs}) => {
  const [query, setQuery] = useState("");
  const [books, setbooks] = useState([]);
  const updateQuery = (query) => {
    setQuery(query.trim());
    const search = async () => {
      const res = await BookAPI.search(query, 10);
      setbooks(res);
    };
    search();
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {(query === "" || !Array.isArray(books))? (
            <img src={searchImage} alt="searchImage" />
          ) : (
            books.map((book) => {
              
                let found = (ele) => ele.id === book.id;
                let pop = Array.isArray(bookShelfs) && bookShelfs.findIndex(found);
              
              return (
              
                <li key={book.id}>
                  <Book shelftype={pop !== -1 ? bookShelfs[pop].shelf : -1} updateShelfs={updateShelfs} book={book} />
                </li>
              )
            } 
          )
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
