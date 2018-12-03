import {
  connect
} from "react-redux";
import {
  login
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
  submitService: login
};

const mapStateToProps = state => ({
  ...stateBasedProps(state, formSetup)
});

const mapDispatchToProps = dispatch => ({
  ...dispatchBasedProps(dispatch, formSetup)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
