import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";
import authentication from "./authenticationReducer";
import profile from "./profileReducer";
import diet from "./dietReducer";
import sports from "./sportsReducer";

const reducers = combineReducers({
  login,
  register,
  authentication,
  profile,
  diet,
  sports
});

export default reducers;
