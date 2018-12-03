import React, { Component } from "react";
import { Input, Fade, Row, Button, Alert } from "reactstrap";

class FormManager extends Component {
  constructor(props) {
    super(props);

    this.props.initFields();

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClearAlert = this.handleClearAlert.bind(this);
  }

  getStateFromProps() {
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
    this.props.onSubmit(this.state.form);
  }

  handleClearAlert() {
    this.props.onClearAlert();
  }

  renderSubmit({ label = "" } = {}) {
    return (
      <Button color="primary" onClick={this.handleOnSubmit}>
        {label}
      </Button>
    );
  }

  renderAlert() {
    const { desc, type } = this.props.alert;
    const showAlert = !!desc;

    return !showAlert ? null : (
      <Alert color={type} isOpen={showAlert} toggle={this.handleClearAlert}>
        {desc}
      </Alert>
    );
  }

  renderField(name) {
    const field = this.props.fields[name];
    const { type } = field;

    switch (type) {
      case "text":
      case "password":
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

      default:
        return null;
    }
  }

  renderFields() {
    const { fields } = this.props;
    const fieldsList = Object.keys(fields);
    return fieldsList.map(name => this.renderField(name));
  }

  render() {
    return null;
  }
}

export default FormManager;
