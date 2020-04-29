import React, { Component } from "react";
import "./FormInput.css";
export default class FormInput extends Component {
  render() {
    return (
      <input
        placeholder={this.props.InputPlaceHolder}
        className="form-input"
        type={this.props.inputType}
        onChange={this.props.onInputChange}
        name={this.props.inputName}
        value={this.props.inputValue}
      />
    );
  }
}
