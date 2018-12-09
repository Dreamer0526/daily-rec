import {
  connect
} from "react-redux";
import {
  register
} from "../services/authServices";
import {
  init_fields,
  clear_alert,
  update_pristine,
  send_submit_request
} from "../templates/formManager/formManagerActions";
import {
  go_log_in
} from "../actions/registerActions";
import {
  verify_auth
} from "../actions/authActions";
import registerFields from "../fields/registerFields";
import Register from "../layouts/Register";

const NAMESPACE = "register";

const mapStateToProps = state => ({
  alert: state.register.alert,
  fields: state.register.fields,
  valid: state.register.valid,
  redirectToHome: state.register.redirectToHome
});

const mapDispatchToProps = dispatch => ({
  initFields: () => dispatch(init_fields(NAMESPACE, registerFields)),
  onFocus: name => dispatch(update_pristine(NAMESPACE, name)),
  onClearAlert: () => dispatch(clear_alert(NAMESPACE)),
  onSubmit: payload => dispatch(send_submit_request(NAMESPACE, register, payload)),
  logInAccount: (form) => dispatch(go_log_in(form)),
  verifyToken: () => dispatch(verify_auth())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
