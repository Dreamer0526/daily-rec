import React, { Component } from "react";
import { Form, Input, Button, Fade, Row, Col, Alert } from "reactstrap";

import Link from "../components/Link";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { form: this.getState() };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  getState() {
    const form = {};

    for (const fieldName in this.props.fields) {
      Object.defineProperty(form, fieldName, {
        value: null,
        enumerable: true,
        writable: true
      });
    }

    return form;
  }

  handleOnFocus(event) {
    this.props.onFocus(event.target.name);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value
      }
    });
  }

  handleOnSubmit() {
    this.props.validateForm(this.state.form);
  }

  renderField(name) {
    const field = this.props.fields[name];

    return (
      <Row className="half-margin-bottom">
        <Input
          {...field}
          name={name}
          value={this.state.form[name]}
          onFocus={this.handleOnFocus}
          onChange={this.handleOnChange}
        />
        <Fade in={field.desc} tag={"span"} className="field-description">
          {field.desc}
        </Fade>
      </Row>
    );
  }

  render() {
    const { alert = {}, fields } = this.props;
    const fieldsList = Object.keys(fields);

    return (
      <Form id="form-register">
        {alert.desc && (
          <Alert color={alert.type}>
            {alert.desc}
            {alert.type === "success" && <Link name="login" />}
          </Alert>
        )}

        <Col
          className="text-center"
          xs={{ size: 12 }}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 8, offset: 2 }}
        >
          {fieldsList.map(name => this.renderField(name))}
          <Button color="primary" onClick={this.handleOnSubmit}>
            Register
          </Button>
        </Col>
      </Form>
    );
  }
}

export default Register;
