import React, { Component } from "react";
import Dropdown from "react-dropdown";
import { toast } from "react-toastify";
import history from "../../history";
import "./UserIcon.css";
export default class UserIcon extends Component {
  state = { isClicked: false };
  dropRef = React.createRef();
  toastId = null;
  componentDidMount() {
    this.dropRef.current.classList.add("remove-drop");
  }
  handleClick = () => {
    // PREVENT DUPLICATE TOAST ON CLICK
    // if (!toast.isActive(this.toastId)) {
    //   toast.configure({
    //     containerId: "A",
    //     autoClose: false,
    //     bodyClassName: "toast-body",
    //     className: "entire-toast",
    //     progressClassName: "toast-progress",
    //     position: toast.POSITION.TOP_CENTER,
    //     closeButton: false,
    //     closeOnClick: false,
    //   });
    //   this.toastId = toast((closeToast) => <LoginForm />);
    // }
    // history.push("/login");
    // this.setState({ isClicked: true });
    this.dropRef.current.classList.toggle("remove-drop");
  };
  loginClick = () => {
    history.push("/login");
    this.dropRef.current.classList.add("remove-drop");
  };
  logoutClick = () => {
    history.push("/");
    this.dropRef.current.classList.add("remove-drop");
  };
  registerClick = () => {
    history.push("/register");
    this.dropRef.current.classList.add("remove-drop");
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
      <div>
        <span onClick={this.handleClick} className="user-icon">
          {display(this.props.authenticated)}
        </span>
        <span ref={this.dropRef} className="entire-dropdown">
          <ul className="side-options">
            <li className="side-item">Tlogipai</li>
            <li onClick={this.loginClick} className="side-item">
              login
            </li>
            <li onClick={this.logoutClick} className="side-item">
              logout
            </li>
            <li onClick={this.registerClick} className="side-item">
              register
            </li>
          </ul>
        </span>
      </div>
    );
  }
}
