import {
  combineReducers
} from "redux";
import formManagerReducer from "../templates/formManager/formManagerReducer";

const origin = {
  goLogIn: false
}

const goLogInReducer = (state = origin, action) => {
  switch (action.type) {
    case "logged_in":
      return {
        ...state
      }

    case "login_error":
    default:
      return state;
  }
}

const registerReducer = combineReducers({
  form: formManagerReducer,
  goLogIn: goLogInReducer
});

export default registerReducer;
