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

import registerFields from "../fields/registerFields";
import Register from "../layouts/Register";

const formSetup = {
  subStateName: "register",
  formFields: registerFields,
  submitService: register
};

const mapStateToProps = state => ({
  ...stateBasedProps(state, formSetup)
});

const mapDispatchToProps = dispatch => ({
  ...dispatchBasedProps(dispatch, formSetup)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
