import axios from "axios";
import AuthorizedService from "./authorizedService";
import {
  pathToProfileSettings
} from "./paths/profileApiPaths";

class ProfileServices extends AuthorizedService {
  fetchSettings() {
    const {
      headers
    } = this;
    const url = pathToProfileSettings;

    return axios({
      method: "get",
      url,
      headers
    });
  }
}

export default ProfileServices;
