import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";
import authentication from "./authenticationReducer";
import profile from "./profileReducer";
import records from "./recordsReducers";

const reducers = combineReducers({
  login,
  register,
  authentication,
  profile,
  records
});

export default reducers;
