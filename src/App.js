import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LowerMenu from "./components/LowerMenu/LowerMenu";
import LoginForm from "./components/LoginForm/LoginForm";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
              color: "white",
            }}
          >
            <Route path="/login" exact component={LoginForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
