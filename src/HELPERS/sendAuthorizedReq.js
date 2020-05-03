import API from "../API/api";
import checkToken from "../redux/actionCreators/checkToken";
export default async function (method, url) {
  try {
    const token = checkToken().payload;
    if (token) {
      API.defaults.headers.common["authorization-x-token"] = token;
      const response = await API({
        method,
        url,
      });

      return response.data;
    } else {
      delete API.defaults.headers.common["authorization-x-token"];
      return false;
    }
  } catch (error) {
    //   HANDLE UNHAUTORIZED ERROR, DATABASE ERROR HERE
    console.log("olgy error DURING request response");
    return false;
  }
}
