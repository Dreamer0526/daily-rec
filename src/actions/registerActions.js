import {
  login
} from "../services/authServices";

const namespace = "register"

/**
 * @method log_in_account
 * @param {Object} payload {username: String, password: String}
 */
export function go_log_in(form) {
  return async dispatch => {
    try {
      await login(form);
      dispatch({
        namespace,
        desc: "Login success",
        type: "SET_STATE",
        state: {
          redirectToHome: true
        }
      });
    } catch (error) {
      dispatch({
        namespace,
        desc: "Login Error",
        type: "SET_STATE",
        state: {
          alert: {
            desc: "Unknown error occurred",
            type: "danger"
          }
        }
      });
    }
  }
}
