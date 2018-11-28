import React, { Component } from "react";
import { Form, Input, Button, Fade, Row, Alert } from "reactstrap";
import { register } from "../services/authServices";

const originFields = {
  username: {
    value: "",
    alert: ""
  },
  password: {
    value: "",
    alert: ""
  }
};

class Register extends Component {
  constructor() {
    super();

    this.state = {
      alert: "",
      disabled: false,
      fields: originFields
    };
  }

  validateForm() {
    let isValidated = true;

    let { fields } = this.state;

    for (const fieldName in fields) {
      const fieldContent = fields[fieldName];

      if (!fieldContent.value) {
        // add alert text in fieldContent and update fields
        fields = {
          ...fields,
          [fieldName]: {
            ...fieldContent,
            alert: `${fieldName} is required.`
          }
        };
        isValidated = false;
      }
    }

    this.setState({ fields });
    return isValidated;
  }

  async submit() {
    if (!this.validateForm()) return;

    this.setState({ disabled: true });

    const { username, password } = this.state.fields;
    const form = {
      username: username.value,
      password: password.value
    };

    try {
      await register(form);
    } catch (error) {
      this.setState({ alert: "User name is used" });
    } finally {
      this.setState({ disabled: false });
    }
  }

  handleOnChange(event) {
    const { name, value } = event.target;

    const { fields } = this.state;
    const modified = {
      ...fields,
      [name]: {
        ...fields[name],
        value
      }
    };

    this.setState({ fields: modified });
  }

  render() {
    const { alert, disabled, fields } = this.state;
    const { username, password } = fields;

    return (
      <Form id="form-register">
        {alert && <Alert color="warning">{alert}</Alert>}
        <Row className="half-margin-bottom">
          <Input
            name="username"
            placeholder="User Name"
            value={username.value}
            onChange={this.handleOnChange.bind(this)}
          />
          <Fade in={username.alert} tag={"span"}>
            {username.alert}
          </Fade>
        </Row>
        <Row className="half-margin-bottom">
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={this.handleOnChange.bind(this)}
          />
          <Fade in={password.alert} tag={"span"}>
            {password.alert}
          </Fade>
        </Row>
        <Button
          outline
          color="primary"
          disabled={disabled}
          onClick={() => this.submit()}
        >
          Register
        </Button>
      </Form>
    );
  }
}

export default Register;
