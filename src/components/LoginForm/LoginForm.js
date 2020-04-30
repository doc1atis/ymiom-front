import React, { Component } from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./LoginForm.css";
class LoginForm extends Component {
  render() {
    return (
      <AuthForm
        buttonIcon={<i className="fas fa-user-lock"></i>}
        buttontext="login"
        formName="loginForm"
      />
    );
  }
}

export default LoginForm;
