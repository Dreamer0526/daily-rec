import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";
import authentication from "./authenticationReducer";
import profile from "./profileReducer";
import diet from "./dietReducer";

const reducers = combineReducers({
  login,
  register,
  authentication,
  profile,
  diet
});

export default reducers;
