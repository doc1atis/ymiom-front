import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideNaveItem.css";
export default class SideNaveItem extends Component {
  render() {
    return (
      <Link
        onClick={this.props.itemAction}
        className="nav-item"
        to={this.props.itemRoute}
        ref={this.props.itemRef}
        name={this.props.itemName}
      >
        <span className="nav-item-icon">{this.props.itemIcon}</span>
        <span className="nav-item-text">{this.props.itemText}</span>
      </Link>
    );
  }
}
