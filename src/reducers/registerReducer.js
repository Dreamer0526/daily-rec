import {
  combineReducers
} from "redux";
import formManagerReducer from "../templates/formManager/formManagerReducer";

const registerReducer = combineReducers({
  form: formManagerReducer
});

export default registerReducer;