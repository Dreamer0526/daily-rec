import {
  connect
} from "react-redux";
import {
  login
} from "../services/authServices";
import {
  init_fields,
  clear_alert,
  update_pristine,
  send_submit_request
} from "../templates/formManager/formManagerActions";
import {
  verify_auth
} from "../actions/authActions";

import loginFields from "../fields/loginFields";
import Login from "../layouts/Login";

const NAMESPACE = "login";

const mapStateToProps = state => ({
  alert: state.login.alert,
  fields: state.login.fields,
  valid: state.login.valid
});

const mapDispatchToProps = dispatch => ({
  initFields: () => dispatch(init_fields(NAMESPACE, loginFields)),
  onFocus: name => dispatch(update_pristine(NAMESPACE, name)),
  onClearAlert: () => dispatch(clear_alert(NAMESPACE)),
  onSubmit: payload => dispatch(send_submit_request(NAMESPACE, login, payload)),
  verifyToken: () => dispatch(verify_auth())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
