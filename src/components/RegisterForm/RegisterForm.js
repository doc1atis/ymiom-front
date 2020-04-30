import React, { Component } from "react";
import AuthForm from "../AuthForm/AuthForm";
class RegisterForm extends Component {
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

export default RegisterForm;
