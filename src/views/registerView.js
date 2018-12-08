import {
  connect
} from "react-redux";
import {
  register
} from "../services/authServices";
import * as formManager from "../templates/formManager/formManagerView";
import {
  go_log_in
} from "../actions/registerActions";
import registerFields from "../fields/registerFields";
import Register from "../layouts/Register";

const formSetup = {
  namespace: "register",
  formFields: registerFields,
  submitService: register
};

const mapStateToProps = state => ({
  ...formManager.mapStateToProps(state, formSetup),
  redirectToHome: state.register.redirectToHome
});

const mapDispatchToProps = dispatch => ({
  ...formManager.mapDispatchToProps(dispatch, formSetup),
  logInAccount: (form) => dispatch(go_log_in(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
