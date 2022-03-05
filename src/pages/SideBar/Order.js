import React from "react";
import "./SideBar.css";
const Order = ({ order, remaining }) => {
  const { name, cover, _id } = order.book;

  const handleCancel = (id) => {
    const procced = window.confirm("Are you sure want to cancle??");
    if (procced) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            remaining(true);
          }
        });
    }
  };
  return (
    <div className="order">
      <div className="order-details">
        <img src={cover} alt="" />
        <small>{name}</small>
        <i className="fa-solid fa-trash-xmark"></i>
      </div>
      <div className="order-amount">
        <button>-</button>
        <button>+</button>
        <button onClick={(e) => handleCancel(_id)} className="order-cancel">
          X<i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Order;
