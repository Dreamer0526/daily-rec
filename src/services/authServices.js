import axios from "axios";
import * as authApiPaths from "./paths/authApiPaths";

/**
 * @method register
 * @param {Object} form Registration form, with keys [username, password] 
 * @return {Promise} 
 */
export const register = (form) => {
  const url = authApiPaths.pathToRegister;
  return axios.post(url, form);
}