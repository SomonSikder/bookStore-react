import React, { Component } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import SideBar from "./pages/SideBar/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header> </Header>
        <SideBar></SideBar>

        <Home></Home>
      </div>
    );
  }
}

export default App;
