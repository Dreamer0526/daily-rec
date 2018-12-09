import withServices from "../services";
import {
  origin
} from "../reducers/authenticationReducer";

export function logout() {
  localStorage.removeItem("access_token");

  return {
    namespace: "authentication",
    desc: "log out",
    type: "REPLACE_STATE",
    state: origin
  }
}

export function verify_auth() {
  return async (dispatch) => {
    const {
      token
    } = withServices("token");

    try {
      const response = await token.verify();

      dispatch({
        namespace: "authentication",
        desc: "access token verified",
        type: "SET_STATE",
        state: {
          authenticated: true,
          username: response.data.username,
          expireAt: response.data.exp,
          issueAt: response.data.iat,
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
}
