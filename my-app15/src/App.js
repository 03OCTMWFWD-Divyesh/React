import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import BookList from "./Component/BookList";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  )
}
export default App;
