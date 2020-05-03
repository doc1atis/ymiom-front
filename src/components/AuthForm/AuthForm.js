import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import "./AuthForm.css";
import API from "../../API/api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import login from "../../redux/actionCreators/login";
import history from "../../history";
class AuthForm extends Component {
  state = { username: "", password: "" };
  toastId = null;
  componentDidMount() {
    if (this.props.isAuth) {
      history.push("/");
    }
  }
  componentDidUpdate() {
    if (this.props.isAuth) {
      history.push("/");
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e.target.name === "registerForm") {
        await API.post("/users/register", {
          username: this.state.username,
          password: this.state.password,
        });

        history.push("/login");
        this.toastId = toast.success("registration was successful");
      } else if (e.target.name === "loginForm") {
        // TRY TO LOG USER IN BASED ON THE FORM NAME
        const { username, password } = this.state;
        this.props.login({ username, password });
      }
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.alreadyRegistered
      ) {
        // PREVENT DUPLICATE TOAST ON CLICK
        if (!toast.isActive(this.toastId)) {
          this.toastId = toast.error(error.response.data.message);
        }
      }
    }
  };
  handleChange = (e) => {
    // DISPATCH ACTION TO UPDATE REDUX STATE
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="login-form">
        <form
          name={this.props.formName}
          onSubmit={this.handleSubmit}
          className="form-content"
        >
          <FormInput
            onInputChange={this.handleChange}
            InputPlaceHolder="Username"
            inputType="text"
            inputName="username"
            inputValue={this.state.username}
          />
          <FormInput
            onInputChange={this.handleChange}
            InputPlaceHolder="Password"
            inputType="password"
            inputName="password"
            inputValue={this.state.password}
          />
          <button type="submit" className="form-button">
            <span className="button-icon">{this.props.buttonIcon}</span>
            <span className="button-text">{this.props.buttontext}</span>
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};
export default connect(mapStateToProps, { login })(AuthForm);
