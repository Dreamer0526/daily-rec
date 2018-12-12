import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Col, Alert } from "reactstrap";

import FormManager from "../templates/formManager/FormManager";
import registerFields from "../fields/registerFields";

import Link from "../components/Link";

const NAMESPACE = "register";

class Register extends FormManager {
  constructor(props) {
    super(props);

    this.namespace = NAMESPACE;
    this.fields = registerFields;

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const { form } = this.state;
    this.props.dispatch({
      type: "saga_login",
      payload: form,
      namespace: this.namespace
    });
  }

  renderAlert() {
    const { desc, type } = this.props.alert;
    const showAlert = !!desc;

    return (
      <Alert color={type} isOpen={showAlert} toggle={this.handleClearAlert}>
        {desc}
        {type === "success" && <Link name="login" onClick={this.signIn} />}
      </Alert>
    );
  }

  render() {
    return (
      <Form id="form-register">
        {this.renderAlert()}

        <Col
          className="text-center"
          xs={{ size: 12 }}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 8, offset: 2 }}
        >
          {this.renderFields()}
          {this.renderSubmit({ label: "Register" })}
        </Col>
      </Form>
    );
  }
}

const mapStateToProps = state => state.register;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
  onSubmit: payload =>
    dispatch({ type: "saga_register", payload, namespace: NAMESPACE })
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
