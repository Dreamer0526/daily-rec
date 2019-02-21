import axios from "axios";
import { AuthorizedService } from "../baseServices";
import {
  pathToProfileSettings
} from "./profileApiPaths";

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

  patchSettings(settings) {
    const {
      headers
    } = this;
    const url = pathToProfileSettings;

    return axios({
      method: "post",
      url,
      headers,
      data: settings
    });
  }
}

export default ProfileServices;
