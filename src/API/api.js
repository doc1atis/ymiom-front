import Axios from "axios";
// "http://localhost:3001/api"
export default Axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "/api",
  headers: {
    "authorization-x-token": localStorage.getItem("jwtToken"),
    // "content-type": "multipart/form-data"
  },
});
