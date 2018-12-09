import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";
import authentication from "./authenticationReducer";

const reducers = combineReducers({
  login,
  register,
  authentication
});

export default reducers;
