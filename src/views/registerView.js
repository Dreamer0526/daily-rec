import {
  connect
} from "react-redux";
import {
  register
} from "../services/authServices";
import { 
  map_state_to_props, 
  map_dispatch_to_props 
} from "../templates/formManager/formManagerViewMethods";

import registerFields from "../fields/registerFields";
import Register from "../layouts/Register";

const SUB_STATE = "register";

const mapStateToProps = (state) => {
  return map_state_to_props(state, SUB_STATE);
}

const mapDispatchToProps = (dispatch) => {
  return map_dispatch_to_props(dispatch, SUB_STATE, registerFields, register);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
