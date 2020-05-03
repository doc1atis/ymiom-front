import Axios from "axios";
// "http://localhost:3001/api"
export default Axios.create({
  baseURL:
    process.env.REACT_APP_APP_PHASE === "development"
      ? "http://localhost:3001/api"
      : "/api",
});

// Alter defaults after instance has been created
// API.defaults.headers.common['authorization-x-token'] = AUTH_TOKEN;
/*
SEND AUTHORIZED REQUEST
const token = checkToken().payload
if(token){
  API.defaults.headers.common['authorization-x-token'] = token
  const response = await API({method:"get",url:"/users/uploads"})
}else{
  delete API.defaults.headers.common['authorization-x-token']
  
}


*/
