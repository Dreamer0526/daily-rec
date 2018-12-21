import axios from "axios";
import AuthorizedService from "../authorizedService";
import {
  pathToTokenVerify
} from "./tokenApiPaths";

class TokenServices extends AuthorizedService {
  verify() {
    const {
      headers
    } = this;
    const url = pathToTokenVerify;

    return axios({
      method: "get",
      url,
      headers
    });
  }
}

export default TokenServices;
