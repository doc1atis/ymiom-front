import React, { Component } from "react";
import "./LowerButton.css";
export default class LowerButton extends Component {
  buttonRef = React.createRef();
  handleClick = (e) => {
    e.preventDefault();
    this.buttonRef.current.classList.remove("lower-button-click");
    void this.buttonRef.current.offsetWidth;

    this.buttonRef.current.classList.add("lower-button-click");
  };

  render() {
    return (
      <button
        ref={this.buttonRef}
        type="button"
        onClick={this.handleClick}
        className={`lower-button ${this.props.desktopclass} ${this.props.mobileclass}`}
      >
        <span className="button-icon">{this.props.icon}</span>
        <span className="button-text">{this.props.text}</span>
      </button>
    );
  }
}
