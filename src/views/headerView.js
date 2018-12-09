import {
  connect
} from "react-redux";
import {
  logout,
  verify_auth
} from "../actions/authActions";
import Header from "../layouts/Header";

const mapStateToProps = state => ({
  authenticated: state.authentication.authenticated,
  username: state.authentication.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  verifyAuthentication: () => dispatch(verify_auth())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
