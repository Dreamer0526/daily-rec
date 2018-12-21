import {
  baseApiPath
} from "../baseApiPaths";

export const pathToAuth = `${baseApiPath}/auth`;

export const pathToRegister = `${pathToAuth}/register`;
export const pathToLogin = `${pathToAuth}/login`;
