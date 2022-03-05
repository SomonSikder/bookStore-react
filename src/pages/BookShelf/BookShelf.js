import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./BookShelf.css";
const BookShelf = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="book-shelf-header">
        <span>{books.length} book's found.</span>
        <div>
          <span>Order by: </span>
          <select className="order-select">
            <option>Select</option>
            <option value="price">Price: lowest to highest</option>
            <option value="date">Publish: latest to oldest</option>
          </select>
        </div>
      </div>

      <div className="book-shelf-main">
        {books.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
