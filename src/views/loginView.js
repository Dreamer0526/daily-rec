import {
  connect
} from "react-redux";
import {
  login
} from "../services/authServices";
import * as formManager from "../templates/formManager/formManagerView";

import loginFields from "../fields/loginFields";
import Login from "../layouts/Login";

const formSetup = {
  namespace: "login",
  formFields: loginFields,
  submitService: login
};

const mapStateToProps = state => ({
  ...formManager.mapStateToProps(state, formSetup)
});

const mapDispatchToProps = dispatch => ({
  ...formManager.mapDispatchToProps(dispatch, formSetup)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
