import axios from "axios";
import { CsrfService } from "../baseServices";
import {
  pathToRegister,
  pathToLogin
} from "./authApiPaths";

class authServices extends CsrfService {
  register(form) {
    const url = pathToRegister;
    const { headers } = this;
    return axios.post(url, form, { headers });
  }

  login(form) {
    const url = pathToLogin;
    const { headers } = this;
    return axios.post(url, form, { headers });
  }
}

export default authServices;
