import axios from "axios";
import { pathToRegister } from "./paths/authApiPaths";

/**
 * @method register
 * @param {Object} form {username: String, password: String}
 * @return {Promise} 
 */
export function register(form) {
  const url = pathToRegister;
  return axios.post(url, form);
}