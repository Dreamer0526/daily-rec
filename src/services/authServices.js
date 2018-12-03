import axios from "axios";
import {
  pathToRegister,
  pathToLogin
} from "./paths/authApiPaths";

/**
 * @method register
 * @param {Object} form {username: String, password: String}
 * @return {Promise} 
 */
export function register(form) {
  const url = pathToRegister;
  return axios.post(url, form);
}

export function login(form) {
  const url = pathToLogin;
  return axios.post(url, form);
}
