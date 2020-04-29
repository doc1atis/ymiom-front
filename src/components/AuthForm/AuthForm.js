import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import "./AuthForm.css";
import API from "../../API/api";
import { toast, Bounce } from "react-toastify";
export default class AuthDorm extends Component {
  state = { username: "", password: "" };
  toastId = null;
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e.target.name === "registerForm") {
        const response = await API.post("/users/register", {
          username: this.state.username,
          password: this.state.password,
        });
        console.log(response.data);
      } else if (e.target.name === "loginForm") {
        console.log("olgy login");
      }
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.alreadyRegistered
      ) {
        console.log("already registered");
        // PREVENT DUPLICATE TOAST ON CLICK
        if (!toast.isActive(this.toastId)) {
          toast.configure({
            autoClose: 2000,
            bodyClassName: "toast-body",
            className: "entire-toast",
            transition: Bounce,
            position: toast.POSITION.TOP_CENTER,
            closeButton: false,
            draggablePercent: 5,
          });
          this.toastId = toast.error(error.response.data.message);
        }
      }
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="login-form">
        <form
          name={this.props.formName}
          onSubmit={this.handleSubmit}
          className="form-content"
        >
          <FormInput
            onInputChange={this.handleChange}
            inputPlaceHolder="Username"
            inputType="text"
            inputName="username"
            inputValue={this.state.username}
          />
          <FormInput
            onInputChange={this.handleChange}
            inputPlaceHolder="Password"
            inputType="password"
            inputName="password"
            inputValue={this.state.password}
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
