import React, { Component } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import RightMenu from "../RightMenu/RightMenu";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <Link to="/" className="brand-word">
          <i className="fab fa-mix"></i>iom
        </Link>
        <SearchBar />

        <RightMenu />
      </div>
    );
  }
}
