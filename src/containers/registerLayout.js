import { connect } from "react-redux";
import Register from "../components/Register";
import { sendRegisterRequest } from "../actions/registerActions";

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (payload) => dispatch(sendRegisterRequest(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);