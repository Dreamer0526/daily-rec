import {
  login
} from "../services/authServices";

/**
 * @method log_in_account
 * @param {Object} payload {username: String, password: String}
 */
export function go_log_in(form) {
  return async dispatch => {
    try {
      await login(form);
      dispatch({
        type: "logged_in"
      });
    } catch (error) {
      dispatch({
        type: "login_error"
      });
    }
  }
}
