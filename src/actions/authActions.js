import {
  origin
} from "../reducers/authenticationReducer";
import {
  redirectToHome
} from "../utils/locations";

export function logout() {
  localStorage.removeItem("access_token");
  redirectToHome();

  return {
    namespace: "authentication",
    desc: "log out",
    type: "REPLACE_STATE",
    state: origin
  }
}