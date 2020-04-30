import React, { Component } from "react";
import { connect } from "react-redux";
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      console.log(this.props);
      this.protectRoute();
    }
    componentDidUpdate() {
      this.protectRoute();
    }
    protectRoute() {
      if (this.props.isAuth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent />;
    }
  }
  const mapStateToprops = (state) => {
    return { isAuth: state.authReducer.isAuth };
  };
  return connect(mapStateToprops, {})(ComposedComponent);
};
