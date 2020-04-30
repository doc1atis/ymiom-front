import { LOGOUT } from "../actionTypes";
import history from "../../history";
function logout() {
  localStorage.removeItem("token");
  history.push("/login");
  return { type: LOGOUT, payload: false };
}
export default logout;
