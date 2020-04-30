import React, { Component } from "react";
import { Link } from "react-router-dom";
// COMPONENT STYLING
import "./SideNav.css";
export default class SideNav extends Component {
  render() {
    return (
      <div ref={this.props.sideNavRef} className="side-nav">
        <Link className="nav-item" to="/profile">
          <span className="nav-item-icon">
            <i className="far fa-user-circle"></i>
          </span>
          <span className="nav-item-text">Account</span>
        </Link>
        <Link className="nav-item" to="/login">
          <span className="nav-item-icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="nav-item-text">Login</span>
        </Link>
        <Link className="nav-item" to="/logout">
          <span className="nav-item-icon">
            <i className="fas fa-user-slash"></i>
          </span>
          <span className="nav-item-text">Logout</span>
        </Link>
        <Link className="nav-item" to="/register">
          <span className="nav-item-icon">
            <i className="fas fa-user-plus"></i>
          </span>
          <span className="nav-item-text">Register</span>
        </Link>
      </div>
    );
  }
}
