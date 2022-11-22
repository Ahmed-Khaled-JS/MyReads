
import * as BookAPI from "../BooksAPI";
const Book = ({ book, updateShelfs, shelftype }) => {
  //   const [bookWillMove, setbookWillMove] = useState("");
  const updateshelf = (shelf, book) => {
    const update = async () => {
      const res = await BookAPI.update(book, shelf);
      !res && console.log(res)
      updateShelfs();
    };
    update();
  };
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")",
            }}
          ></div>
        ) : (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url()",
            }}
          ></div>
        )}
        <div className="book-shelf-changer">
          <select
            value={
              book.shelf ? book.shelf : shelftype === -1 ? "none" : shelftype
            }
            onChange={(event) => updateshelf(event.target.value, book)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {shelftype !== -1 && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.map((author) => author + " ")}
      </div>
    </div>
  );
};
export default Book;
