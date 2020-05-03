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
            <span className="options-icon">
              <i className="fas fa-arrow-alt-circle-up"></i>
            </span>
            <span className="options-text">upload a single</span>
          </button>
          <button className="upload-options-button" type="button">
            <span className="options-icon">
              <i className="fab fa-creative-commons-sampling-plus"></i>
            </span>
            <span className="options-text">upload an album</span>
          </button>
          <button
            className="upload-options-button my-uploads-button"
            type="button"
          >
            <span className="options-icon">
              <i className="fas fa-cubes"></i>
            </span>
            <span className="options-text my-uploads-text">my uploads</span>
          </button>
        </div>
      </div>
    );
  }
}
