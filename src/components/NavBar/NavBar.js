import React, { Component } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import RightMenu from "../RightMenu/RightMenu";
export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h2 className="brand-word">miom</h2>
        <SearchBar />
        <RightMenu />
      </div>
    );
  }
}
