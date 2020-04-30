import React, { Component } from "react";
import "./UserIcon.css";
import { connect } from "react-redux";
import logout from "../../redux/actionCreators/logout";
import SideNav from "../SideNav/SideNav";
class UserIcon extends Component {
  sideNavRef = React.createRef();
  handleClick = () => {
    this.sideNavRef.current.classList.toggle("open-close-nav");
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
        <SideNav sideNavRef={this.sideNavRef} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
export default connect(mapStateToProps, { logout })(UserIcon);
