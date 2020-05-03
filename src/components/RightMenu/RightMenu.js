import React, { Component } from "react";
import UserIcon from "../UserIcon/UserIcon";
import LowerButton from "../LowerButton/LowerButton";
import "./RightMenu.css";
import { connect } from "react-redux";
class RightMenu extends Component {
  render() {
    return (
      <>
        <div className="right-menu">
          <LowerButton
            icon={<i className="fas fa-cloud-upload-alt"></i>}
            text={"uploads"}
            navigateTo="/uploads"
          />
          <LowerButton
            icon={<i className="fas fa-broadcast-tower"></i>}
            text={"stations"}
            navigateTo="/stations"
          />
          <LowerButton
            icon={<i className="fas fa-assistive-listening-systems"></i>}
            text={"playlists"}
            navigateTo="/playlists"
          />
          <LowerButton
            icon={<i className="fas fa-heart"></i>}
            text={"likes"}
            navigateTo="/likes"
          />
          <UserIcon authenticated={this.props.isAuth} />
        </div>
        <div className="mobile-user">
          <UserIcon authenticated={this.props.isAuth} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
export default connect(mapStateToProps, {})(RightMenu);
