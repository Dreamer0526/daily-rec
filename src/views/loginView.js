import {
  connect
} from "react-redux";
import {
  register
} from "../services/authServices";
import {
  stateBasedProps,
  dispatchBasedProps
} from "../templates/formManager/formManagerViewMethods";

import loginFields from "../fields/loginFields";
import Login from "../layouts/Login";

const formSetup = {
  subStateName: "login",
  formFields: loginFields,
  submitService: register
};

const mapStateToProps = state => ({
  ...stateBasedProps(state, formSetup)
});

const mapDispatchToProps = dispatch => ({
  ...dispatchBasedProps(dispatch, formSetup)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
