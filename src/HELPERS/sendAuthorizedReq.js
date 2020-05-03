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

      return response;
    } else {
      delete API.defaults.headers.common["authorization-x-token"];
      return { data: "INVALID_TOKEN" };
    }
  } catch (error) {
    //   HANDLE UNHAUTORIZED ERROR, DATABASE ERROR HERE
    console.log("olgy error DURING request response");
    console.dir(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // response.status == 401  ---> unauthorized
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // server was down,Network Error

      return error.message;
    } else {
      console.log("SOMETHING ELSE HAPPENED");
      // Something happened in setting up the request that triggered an Error
      return error;
    }
  }
}
