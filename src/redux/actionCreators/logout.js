import { LOGOUT } from "../actionTypes";
function logout() {
  localStorage.removeItem("token");
  return { type: LOGOUT, payload: false };
}
export default logout;
