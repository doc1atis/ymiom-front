import React, { Component } from "react";
import history from "../../history";
import "./UserIcon.css";
import { connect } from "react-redux";
import logout from "../../redux/actionCreators/logout";
class UserIcon extends Component {
  state = { isClicked: false };
  dropRef = React.createRef();

  componentDidMount() {
    this.dropRef.current.classList.add("remove-drop");
  }
  handleClick = () => {
    this.dropRef.current.classList.toggle("remove-drop");
  };
  loginClick = () => {
    history.push("/login");
    this.dropRef.current.classList.add("remove-drop");
  };
  logoutClick = () => {
    this.dropRef.current.classList.add("remove-drop");
    this.props.logout();
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
            {!this.props.isAuth ? (
              <li onClick={this.loginClick} className="side-item">
                login
              </li>
            ) : null}
            {this.props.isAuth ? (
              <li onClick={this.logoutClick} className="side-item">
                logout
              </li>
            ) : null}
            {this.props.isAuth ? null : (
              <li onClick={this.registerClick} className="side-item">
                register
              </li>
            )}
          </ul>
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
export default connect(mapStateToProps, { logout })(UserIcon);
