import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LowerMenu from "./components/LowerMenu/LowerMenu";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HomePage from "./components/HomePage/HomePage";
import history from "./history";
import { connect } from "react-redux";
import checkToken from "./redux/actionCreators/checkToken";
import RequireAuth from "./components/RequireAuth/RequireAuth";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
  }
  render() {
    return (
      <Router history={history}>
        <div
          id="app-react-root"
          style={{
            display: "grid",
            gridTemplateColumns: "100%",
            gridTemplateRows: "max-content 1fr",
            paddingTop: "75px",
            height: "100vh",
          }}
        >
          {/* grid item 1 */}
          <div id="app-head" style={{ gridRow: "1/2" }}>
            <NavBar />
            <LowerMenu />
          </div>

          {/* grid item 2 put everything else inside of it*/}
          <div
            id="app-body"
            style={{
              backgroundColor: "#0B0C10",
              gridRowStart: "2",
              gridRowEnd: "-1",
            }}
          >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact component={RequireAuth(LoginForm)} />
              <Route
                path="/register"
                exact
                component={RequireAuth(RegisterForm)}
              />
              <Route render={() => <div>not found</div>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(null, { checkToken })(App);
