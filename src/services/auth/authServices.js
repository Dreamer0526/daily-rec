import axios from "axios";
import {
  pathToRegister,
  pathToLogin
} from "./authApiPaths";

class authServices {
  register(form) {
    const url = pathToRegister;
    return axios.post(url, form);
  }

  login(form) {
    const url = pathToLogin;
    return axios.post(url, form);
  }
}

export default authServices;
