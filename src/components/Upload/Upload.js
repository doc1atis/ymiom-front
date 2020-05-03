import React, { Component } from "react";
import sendAuthorizedRed from "../../HELPERS/sendAuthorizedReq";
import "./Upload.css";
export default class Upload extends Component {
  async componentDidMount() {
    const response = await sendAuthorizedRed("get", "/users/uploads");
    console.dir(response);
  }
  render() {
    return (
      <div className="upload">
        <div className="upload-options">
          <button className="upload-options-button" type="button">
            upload a single
          </button>
          <button className="upload-options-button" type="button">
            upload and album
          </button>
          <button className="upload-options-button" type="button">
            my uploads
          </button>
        </div>
      </div>
    );
  }
}
