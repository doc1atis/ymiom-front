import React, { Component } from "react";
import { connect } from "react-redux";
import logout from "../../redux/actionCreators/logout";
import SideNavItem from "../SideNavItem/SideNaveItem";
// COMPONENT STYLING
import "./SideNav.css";
class SideNav extends Component {
  itemRef = React.createRef();
  handleItemClick = () => {
    this.props.sideNavRef.current.classList.remove("open-close-nav");

    if (this.itemRef.current.name === "logout") {
      this.props.logout();
    }
  };

  display = (isAuth) => {
    if (isAuth) {
      return (
        <>
          <SideNavItem
            itemRoute="/profile"
            itemIcon={<i className="far fa-user-circle"></i>}
            itemText="Account"
            itemAction={this.handleItemClick}
            itemRef={this.itemRef}
            itemName="account"
          />
          <SideNavItem
            itemRoute="/login"
            itemIcon={<i className="fas fa-user-slash"></i>}
            itemText="Logout"
            itemAction={this.handleItemClick}
            itemRef={this.itemRef}
            itemName="logout"
          />
        </>
      );
    } else {
      return (
        <>
          <SideNavItem
            itemRoute="/login"
            itemIcon={<i className="fas fa-users"></i>}
            itemText="Login"
            itemAction={this.handleItemClick}
            itemRef={this.itemRef}
            itemName="login"
          />

          <SideNavItem
            itemRoute="/register"
            itemIcon={<i className="fas fa-user-plus"></i>}
            itemText="Register"
            itemAction={this.handleItemClick}
            itemRef={this.itemRef}
            itemName="register"
          />
        </>
      );
    }
  };
  render() {
    return (
      <div ref={this.props.sideNavRef} className="side-nav">
        {this.display(this.props.isAuth)}
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
export default connect(mapSateToProps, { logout })(SideNav);
