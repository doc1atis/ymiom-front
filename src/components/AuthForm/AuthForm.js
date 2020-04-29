import React, { Component } from "react";
import "./AuthForm.css";
export default class AuthDorm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted olgy yeahhh");
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
          <button type="submit" className="form-button">
            <span className="button-icon">{this.props.buttonIcon}</span>
            <span className="button-text">{this.props.buttontext}</span>
          </button>
        </form>
      </div>
    );
  }
}
