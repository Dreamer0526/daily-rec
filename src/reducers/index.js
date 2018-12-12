import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";
import authentication from "./authenticationReducer";
import profile from "./profileReducer";

const reducers = combineReducers({
  login,
  register,
  authentication,
  profile
});

export default reducers;