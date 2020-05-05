import React, { Component } from "react";
import sendAuthorizedRed from "../../HELPERS/sendAuthorizedReq";
import API from "../../API/api";
import "./Upload.css";

export default class Upload extends Component {
  fileInputRef = React.createRef();

  handleFileChange = async (e) => {
    try {
      console.dir(e.target.files[0]);
      const formData = new FormData();
      formData.append("cover-image", e.target.files[0]);
      // dispatch an action to say uploading is true,uploaded is false
      const res = await API.post("/users/uploads", formData);
      // dispatch and action to say uploaded is true,uploading is false

      console.log(res);
    } catch (error) {
      console.log("olgy error uploading");
    }
  };
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
        <form>
          <input
            onChange={this.handleFileChange}
            ref={this.fileInputRef}
            type="file"
          />
        </form>
        <img
          src="http://localhost:3001/api/users/beka/beed3d3e-16c9-4502-842e-117a7c3d98cacreative.jpg"
          alt="cover"
          crossOrigin="anonymous"
          style={{
            width: "60%",
            height: "200px",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        />

        <audio
          controls
          src="http://localhost:3001/api/users/beka/754337dd-7f16-4715-ac65-96a7221ce9a7kite san blame.mp3"
          crossOrigin="anonymous"
        >
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}
/**
  // Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:83867237-275b-484c-825f-985234644bbb',
});
 */
