import React, { Component } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import RightMenu from "../RightMenu/RightMenu";

export default class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <h2 className="brand-word">
          <i className="fab fa-mix"></i>iom
        </h2>
        <SearchBar />

        <RightMenu />
      </div>
    );
  }
}
