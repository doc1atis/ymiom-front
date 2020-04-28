import React, { Component } from "react";
import UserIcon from "../UserIcon/UserIcon";
import LowerButton from "../LowerButton/LowerButton";
import "./RightMenu.css";
export default class RightMenu extends Component {
  render() {
    return (
      <>
        <div className="right-menu">
          <LowerButton
            icon={<i className="fas fa-cloud-upload-alt"></i>}
            text={"uploads"}
          />
          <LowerButton
            icon={<i className="fas fa-assistive-listening-systems"></i>}
            text={"playlists"}
          />
          <LowerButton icon={<i className="fas fa-heart"></i>} text={"likes"} />
          <UserIcon authenticated={false} />
        </div>
        <div className="mobile-user">
          <UserIcon authenticated={false} />
        </div>
      </>
    );
  }
}
