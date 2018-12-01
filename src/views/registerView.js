import {
  connect
} from "react-redux";
import Register from "../layouts/Register";
import {
  clearAlert,
  updatePristine,
  sendRegisterRequest,
} from "../actions/registerActions";

const mapStateToProps = state => ({
  alert: state.register.alert,
  fields: state.register.fields,
  valid: state.register.valid
});

const mapDispatchToProps = dispatch => {
  return {
    onFocus: name => dispatch(updatePristine(name)),
    onSubmit: payload => dispatch(sendRegisterRequest(payload)),
    onClearAlert: () => dispatch(clearAlert())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
