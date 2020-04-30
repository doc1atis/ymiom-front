import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
const allReducers = combineReducers({
  authReducer,
});
export default allReducers;
