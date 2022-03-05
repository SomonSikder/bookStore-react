import React, { useEffect, useState } from "react";
import Order from "./Order";
import "./SideBar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [refresh]);
  let total = 0;
  const price = () => {
    return orders.map((order) => (total += order.book.price));
  };
  price();
  const remaining = (id) => {
    setRefresh(id);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckOut = () => {
    setOrders([]);
  };
  return (
    <div className="shopping-main" onClick={toggle}>
      {isOpen ? (
        <div className="shopping-cart">
          <div>
            <button>
              <i className="bx bx-cart fa-lg"></i>
            </button>
            <span>{orders.length}</span>
          </div>
        </div>
      ) : (
        <div className="shoping-sidebar">
          <div className="shopping-sidebar-header">
            <button onClick={toggle}>
              <i className="fa fa-close fa-lg"></i>
            </button>
            <div>
              <h4>Cart</h4>
              <span>({orders.length} Orders)</span>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="order-items">
            {orders.map((order) => (
              <Order key={order.id} order={order} remaining={remaining}></Order>
            ))}
          </div>
          <div className="total">
            <div className="total-amount">
              <h4>TOTAL:</h4>
              <h3>৳ {total}</h3>
            </div>
            <button className="checkout-btn" onClick={handleCheckOut}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
