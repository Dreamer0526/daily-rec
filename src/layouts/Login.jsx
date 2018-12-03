import React from "react";
import { Form, Col } from "reactstrap";

import FormManager from "../templates/formManager/FormManager";

class Register extends FormManager {
  constructor(props) {
    super(props);
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
          {this.renderSubmit({ label: "Login" })}
        </Col>
      </Form>
    );
  }
}

export default Register;
