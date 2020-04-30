import React, { Component } from "react";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    return <div>Home page</div>;
  }
}

export default connect(null, {})(HomePage);
