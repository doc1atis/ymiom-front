import Axios from "axios";
// "http://localhost:3001/api"
export default Axios.create({
  baseURL:
    process.env.REACT_APP_APP_PHASE === "development"
      ? "http://localhost:3001/api"
      : "/api",
  headers: {
    "authorization-x-token": localStorage.getItem("jwtToken"),
    // "content-type": "multipart/form-data"
  },
});
