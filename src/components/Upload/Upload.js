import React, { Component } from "react";
import sendAuthorizedRed from "../../HELPERS/sendAuthorizedReq";
import "./Upload.css";
export default class Upload extends Component {
  async componentDidMount() {
    const response = await sendAuthorizedRed("get", "/users/uploads");
    console.dir(response);
  }
  render() {
    return <div className="upload">uploads</div>;
  }
}
