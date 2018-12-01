import {
  connect
} from "react-redux";

import Register from "../components/Register";
import {
  sendRegisterRequest
} from "../actions/registerActions";

const mapStateToProps = state => ({
  alert: state.register.alert
})

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (payload) => dispatch(sendRegisterRequest(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
