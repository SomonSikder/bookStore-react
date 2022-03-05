import React from "react";
import BookShelf from "../BookShelf/BookShelf";

import "./Home.css";
import SideNav from "./SideNav";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-section">
        <div className="side-container">
          <div className="side-nav">
            <SideNav
              info={["Drama", "Fiction", "Programming Languages"]}
              type={"Cetagories"}
            ></SideNav>
            <SideNav
              info={["Kyle Simpson", "Safayet Ashraf", "Steven S. Skienna"]}
              type={"Author"}
            ></SideNav>
            <SideNav
              info={["Springer", "Dimik Prokashoni", "Learnpub"]}
              type={"Publisher"}
            ></SideNav>
          </div>
        </div>
        <div className="book-shelf">
          <BookShelf></BookShelf>
        </div>
      </div>
    </div>
  );
};

export default Home;
