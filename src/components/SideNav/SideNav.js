import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logout from "../../redux/actionCreators/logout";
// COMPONENT STYLING
import "./SideNav.css";
class SideNav extends Component {
  handleLoginClick = () => {
    this.props.sideNavRef.current.classList.remove("open-close-nav");
  };
  handleLogout = () => {
    this.props.sideNavRef.current.classList.remove("open-close-nav");
    this.props.logout();
  };
  render() {
    return (
      <div ref={this.props.sideNavRef} className="side-nav">
        <Link className="nav-item" to="/profile">
          <span className="nav-item-icon">
            <i className="far fa-user-circle"></i>
          </span>
          <span className="nav-item-text">Account</span>
        </Link>
        <Link onClick={this.handleLoginClick} className="nav-item" to="/login">
          <span className="nav-item-icon">
            <i className="fas fa-users"></i>
          </span>
          <span className="nav-item-text">Login</span>
        </Link>
        <Link onClick={this.handleLogout} className="nav-item" to="/login">
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
export default connect(null, { logout })(SideNav);
