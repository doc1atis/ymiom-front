import { IS_AUTH, LOGOUT, LOGIN } from "../actionTypes";
const INITIAL_STATE = { isAuth: false };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_AUTH:
      return { ...state, isAuth: action.payload };
    case LOGOUT:
      return { ...state, isAuth: action.payload };
    case LOGIN:
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
}
