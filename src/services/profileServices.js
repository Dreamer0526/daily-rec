import axios from "axios";
import AuthorizedService from "./authorizedService";
import {
  pathToProfileSetting
} from "./paths/profileApiPaths";

class ProfileServices extends AuthorizedService {
  fetchSetting() {
    const {
      headers
    } = this;
    const url = pathToProfileSetting;

    return axios({
      method: "get",
      url,
      headers
    });
  }
}

export default ProfileServices;
