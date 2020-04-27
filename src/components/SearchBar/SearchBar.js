import React, { Component } from "react";
import "./SearchBar.css";
export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input placeholder="Search" className="search-input" type="search" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}
