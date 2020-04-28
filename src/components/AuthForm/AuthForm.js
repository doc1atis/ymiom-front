import React, { Component } from "react";

export default class AuthDorm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="form-content">
          <input placeholder="Username" className="form-input" type="text" />
          <input
            placeholder="Password"
            className="form-input"
            type="password"
          />
          <button
            type="submit"
            className="form-button"
            onClick={this.handleClick}
          >
            <span className="button-icon">
              <i className="fas fa-user-lock"></i>
            </span>
            <span className="button-text">login</span>
          </button>
        </form>
      </div>
    );
  }
}
