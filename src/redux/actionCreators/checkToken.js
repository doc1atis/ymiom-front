import { IS_AUTH } from "../actionTypes";
import jwtDecode from "jwt-decode";
export default function () {
  const token = localStorage.getItem("token");
  // IF THERE IS A TOKEN IN LOCAL STORAGE
  if (token) {
    try {
      // DECODE THE TOKEN
      const decoded = jwtDecode(token);
      // ACTUAL DATE IN SECOND (FROM EPOCH)
      const actualDate = Date.now() / 1000;
      // EXPIRATION DATE IN SECOND (FROM EPOCH)
      const expirationDate = decoded.exp;
      if (expirationDate > actualDate) {
        // TOKEN IS NOT EXPIRED
        return { type: IS_AUTH, payload: token };
      } else {
        // TOKEN IS EXPIRED
        return { type: IS_AUTH, payload: false };
      }
    } catch (error) {
      // THERE WAS AN ERROR DURING THE DECODING PROCESS
      // INVALID TOKEN ERROR DUE TO BROWSER MODIFICATION, NOT EXPIRED
      localStorage.removeItem("token");
      return { type: IS_AUTH, payload: false };
    }
  } else {
    // IF THERE IS NO TOKEN IN LOCAL STORAGE
    return { type: IS_AUTH, payload: false };
  }
}
