import React, { Component } from "react";
import { connect } from "react-redux";
import checkToken from "../../redux/actionCreators/checkToken";
export default (ChildComponent, unAuthPath) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      // PREVENT TOKEN MANIPULATION IN BROWSER

      this.protectRoute();
    }

    componentDidUpdate() {
      this.protectRoute();
      if (!checkToken().payload) {
        this.props.history.push(unAuthPath);
      }
    }
    protectRoute = () => {
      if (!this.props.isAuth) {
        this.props.history.push(unAuthPath);
      }
    };
    render() {
      return <ChildComponent />;
    }
  }
  const mapStateToprops = (state) => {
    return { isAuth: state.authReducer.isAuth };
  };
  return connect(mapStateToprops, { checkToken })(ComposedComponent);
};
