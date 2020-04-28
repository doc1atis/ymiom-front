import React, { Component } from "react";
import { toast } from "react-toastify";
import LoginForm from "../LoginForm/LoginForm";
import "./UserIcon.css";

export default class UserIcon extends Component {
  toastId = null;
  handleClick = () => {
    // PREVENT DUPLICATE TOAST ON CLICK
    if (!toast.isActive(this.toastId)) {
      toast.configure({
        containerId: "A",
        autoClose: false,
        bodyClassName: "toast-body",
        className: "entire-toast",
        progressClassName: "toast-progress",
        position: toast.POSITION.TOP_CENTER,
        closeButton: false,
        closeOnClick: false,
      });
      this.toastId = toast((closeToast) => <LoginForm />);
    }
  };
  render() {
    const display = (authenticated) => {
      if (authenticated) {
        return <i className="fas fa-user"></i>;
      } else {
        return <i className="fas fa-user-alt-slash"></i>;
      }
    };
    return (
      <span onClick={this.handleClick} className="user-icon">
        {display(this.props.authenticated)}
      </span>
    );
  }
}
