import React, { Component } from "react";
import LowerButton from "../LowerButton/LowerButton";
import "./LowerMenu.css";
export default class LowerMenu extends Component {
  render() {
    return (
      <div id="lower-menu" className="lower-menu">
        <LowerButton
          icon={<i className="fas fa-cloud-upload-alt"></i>}
          text={"uploads"}
          mobileclass="lower-button-mobile"
        />
        <LowerButton
          icon={<i className="fas fa-assistive-listening-systems"></i>}
          text={"playlists"}
          mobileclass="lower-button-mobile"
        />
        <LowerButton
          icon={<i className="fas fa-heart"></i>}
          text={"likes"}
          mobileclass="lower-button-mobile"
        />
      </div>
    );
  }
}
