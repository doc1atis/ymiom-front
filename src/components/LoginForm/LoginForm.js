import React, { Component } from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./LoginForm.css";
export default class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted olgy yeahhh");
  };
  render() {
    return (
      <AuthForm
        buttonIcon={<i className="fas fa-user-lock"></i>}
        buttontext="login"
      />
    );
  }
}
