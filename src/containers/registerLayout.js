import { connect } from "react-redux";
import Register from "../components/Register";
import { submitRegisterFrom } from "../actions/registerActions";

const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
    username: state.username,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (action) => dispatch(submitRegisterFrom(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);