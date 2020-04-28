import React, { Component } from "react";
import "./UserIcon.css";
export default class UserIcon extends Component {
  render() {
    const display = (authenticated) => {
      if (authenticated) {
        return <i className="fas fa-user"></i>;
      } else {
        return <i className="fas fa-user-alt-slash"></i>;
      }
    };
    return (
      <span className="user-icon">{display(this.props.authenticated)}</span>
    );
  }
}
