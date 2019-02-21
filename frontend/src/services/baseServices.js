import axios from "axios";
import { cookieToObject } from "../utils/cookieHelpers";

axios.defaults.withCredentials = true;


export class CsrfService {
    constructor() {
      const { csrftoken = "" } = cookieToObject();
      this.headers = {
          "X-CSRFToken": csrftoken
      };
    }
}


const ACCESS_TOKEN = localStorage.getItem("access_token");

export class AuthorizedService extends CsrfService{
  constructor(access_token = ACCESS_TOKEN) {
    super();
    this.headers = {
      ...this.headers,
      "Authorization": `Bearer ${access_token}`
    };
  }
}
