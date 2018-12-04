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
import {
  go_log_in
} from "../actions/registerActions";
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
  ...dispatchBasedProps(dispatch, formSetup),
  logInAccount: (form) => dispatch(go_log_in(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
