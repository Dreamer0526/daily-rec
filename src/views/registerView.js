import {
  connect
} from "react-redux";
import Register from "../layouts/Register";
import {
  updatePristine,
  sendRegisterRequest,
  validateRegisterFrom
} from "../actions/registerActions";

const mapStateToProps = state => ({
  alert: state.register.alert,
  desc: state.register.fields.desc,
  valid: state.register.valid
});

const mapDispatchToProps = dispatch => {
  return {
    onFocus: name => dispatch(updatePristine(name)),
    onClickSubmit: payload => dispatch(validateRegisterFrom(payload)),
    submit: payload => dispatch(sendRegisterRequest(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
