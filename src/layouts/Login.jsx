import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Col } from "reactstrap";

import FormManager from "../templates/formManager/FormManager";
import loginFields from "../fields/loginFields";

const NAMESPACE = "login";
class Login extends FormManager {
  constructor(props) {
    super(props);

    this.namespace = NAMESPACE;
    this.fields = loginFields;
  }

  render() {
    return (
      <Form id="form-register">
        {this.renderAlert()}

        <Col
          xs={{ size: 12 }}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 8, offset: 2 }}
        >
          {this.renderFields()}
        </Col>

        {this.renderSubmit({ label: "Login" })}
      </Form>
    );
  }
}

const mapStateToProps = state => state.login;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
  onSubmit: payload =>
    dispatch({ type: "saga_login", payload, namespace: NAMESPACE })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
