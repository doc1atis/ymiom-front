import React, { Component } from "react";
import AuthForm from "../AuthForm/AuthForm";
export default class RegisterForm extends Component {
  render() {
    return (
      <AuthForm
        buttonIcon={<i className="fas fa-user-minus"></i>}
        buttontext="register"
        formName="registerForm"
      />
    );
  }
}
