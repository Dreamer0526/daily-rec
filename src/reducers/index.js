import {
  combineReducers
} from "redux";

import login from "./loginReducer";
import register from "./registerReducer";

const reducers = combineReducers({
  login,
  register
});

export default reducers;
