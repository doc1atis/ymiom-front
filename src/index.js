import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import allReducers from "./redux/allReducers";
import { toast, Bounce } from "react-toastify";
import checkToken from "./redux/actionCreators/checkToken";
// CONFIGURE TOAST ONCE AT ENTRY POINT OF APP
toast.configure({
  autoClose: 2000,
  bodyClassName: "toast-body",
  className: "entire-toast",
  transition: Bounce,
  position: toast.POSITION.TOP_CENTER,
  closeButton: false,
  draggablePercent: 40,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  { authReducer: { isAuth: checkToken().payload } }, // initialize the state before app start up
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
