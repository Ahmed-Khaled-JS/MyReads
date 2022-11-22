import "./App.css";
import { useState, useEffect } from "react";
import SearchPage from "./views/searchPage";
import Main from "./views/main";
import { Route, Routes } from "react-router-dom";
import * as BookAPI from "./BooksAPI";

function App() {

  const [bookShelfs, setbookShelfs] = useState([]);
  useEffect(() => {
    const getShelfs = async () => {
      const res = await BookAPI.getAll();  
      setbookShelfs(res);     
    };
    getShelfs();
  }, []);
  const updateShelfs = ()=> {
    const getShelfs = async () => {
      const res = await BookAPI.getAll();  
      setbookShelfs(res);     
    };
    getShelfs();
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main bookShelfs={bookShelfs} updateShelfs={updateShelfs} />} />
        <Route path="/search" element={<SearchPage bookShelfs={bookShelfs}  updateShelfs={updateShelfs} />} />
      </Routes>
    </div>
  );
}

export default App;
