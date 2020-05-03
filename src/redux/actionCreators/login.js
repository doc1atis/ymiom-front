import { LOGIN } from "../actionTypes";
import API from "../../API/api";
import history from "../../history";
import { toast } from "react-toastify";
// ASYNC ACTION CREATOR
const login = (userInfo) => {
  return async function (dispatch) {
    try {
      const response = await API.post("/users/login", userInfo);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN, payload: response.data.token });
      history.push("/");
      toast.success("login successfully", {
        position: toast.POSITION.TOP_CENTER,

        closeButton: false,
      });
    } catch (error) {
      console.dir(error);

      dispatch({ type: LOGIN, payload: false });
      if (error.response.status === 401) {
        toast.error("invalid password or username", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };
};

export default login;
