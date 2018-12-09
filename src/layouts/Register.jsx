import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, Alert } from "reactstrap";

import FormManager from "../templates/formManager/FormManager";

import Link from "../components/Link";

class Register extends FormManager {
  constructor(props) {
    super(props);
    this.handleGoSignIn = this.handleGoSignIn.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.redirectToHome) {
      this.props.history.push("/");
      this.props.verifyToken();
    }
  }

  handleGoSignIn() {
    const { form } = this.state;
    this.props.logInAccount(form);
  }

  renderAlert() {
    const { desc, type } = this.props.alert;
    const showAlert = !!desc;

    return (
      <Alert color={type} isOpen={showAlert} toggle={this.handleClearAlert}>
        {desc}
        {type === "success" && (
          <Link name="login" onClick={this.handleGoSignIn} />
        )}
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

export default withRouter(Register);
