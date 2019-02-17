const ACCESS_TOKEN = localStorage.getItem("access_token");

class AuthorizedService {
  constructor(access_token = ACCESS_TOKEN) {
    this.headers = {
      "Authorization": `Bearer ${access_token}`
    };
  }
}

export default AuthorizedService;
