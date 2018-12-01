import {
  connect
} from "react-redux";
import Register from "../layouts/Register";
import {
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
    validateForm: payload => dispatch(sendRegisterRequest(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
