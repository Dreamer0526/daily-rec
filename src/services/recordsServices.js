import axios from "axios";
import AuthorizedService from "./authorizedService";
import {
  pathToRecords
} from "./paths/recordsApiPaths";

class RecordsServices extends AuthorizedService {
  fetchRecords() {
    const {
      headers
    } = this;
    const url = pathToRecords;

    return axios({
      method: "get",
      url,
      headers
    });
  }

  patchRecords(records) {
    const {
      headers
    } = this;
    const url = pathToRecords;

    return axios({
      method: "post",
      url,
      headers,
      data: records
    });
  }
}

export default RecordsServices;
