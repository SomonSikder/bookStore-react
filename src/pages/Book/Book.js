import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  const { name, author, cover, price, _id } = book;
  const handleAddToCart = (id) => {
    const order = { book };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added to Cart");
        } else {
          alert(data);
        }
      });
  };
  return (
    <div className="book-card card">
      <div className="book-info">
        <div className="book-tag-discount">
          <b>5%</b> Discount
        </div>
        <div className="book-card-image">
          <img src={cover} alt="You Don't Know JS Yet: Get Started" />
        </div>
        <p className="book-title">{name}</p>
        <span className="book-author">{author}</span>
        <div>
          <div className="book-card-price">
            <span className="price-original">
              <small>৳</small>
              {price}
            </span>
            <span className="price-discount">
              <small>৳</small>
              {price}
            </span>
          </div>
        </div>
      </div>
      <button className="btn-buy" onClick={(e) => handleAddToCart(_id)}>
        Add to cart
      </button>
    </div>
  );
};

export default Book;
