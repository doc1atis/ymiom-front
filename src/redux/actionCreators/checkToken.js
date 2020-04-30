import { IS_AUTH } from "../actionTypes";
export default function () {
  const token = localStorage.getItem("token");

  return { type: IS_AUTH, payload: token };
}
