import axios from 'axios';
import { register } from "../services/authServices";

/**
 * @method submitRegisterFrom
 * @param {Object} payload {username: String, password: String}
 */

export const submitRegisterFrom = (payload) => {
  return {
    type: "submit_register_form",
    payload
  }
}

/**
 * @method sendRegisterRequest
 * @param {Object} payload {username: String, password: String}
 */
export function sendRegisterRequest(payload) {
  return async (dispatch) => {
    dispatch(submitRegisterFrom(payload));

    try {
      await register(payload);
      return dispatch({type: "success"});

    } catch(error) {
      return dispatch({type: "error"});
    }
  }
}