import axios from "axios";
import AuthorizedService from "./authorizedService";
import {
  pathToTokenVerify
} from "./paths/tokenApiPaths";

class TokenServices extends AuthorizedService {
  verify() {
    const {
      headers
    } = this;
    const timestamp = Date.parse(new Date());
    const url = `${pathToTokenVerify}?${timestamp}`;

    return axios({
      method: "get",
      url,
      headers
    });
  }
}

export default TokenServices;