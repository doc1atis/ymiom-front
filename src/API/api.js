import Axios from "axios";
export default Axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api"
      : "/api",
  headers: {
    "authorization-x-token": localStorage.getItem("jwtToken"),
    // "content-type": "multipart/form-data"
  },
});
