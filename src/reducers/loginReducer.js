import {
  combineReducers
} from "redux";
import formManagerReducer from "../templates/formManager/formManagerReducer";

const loginReducer = combineReducers({
  form: formManagerReducer
});

export default loginReducer;
