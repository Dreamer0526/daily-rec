import React, { Component } from "react";
import { Col, Button, Alert } from "reactstrap";

import Input from "../../components/Input";
import Rating from "../../components/Rating";
import MultiInput from "../../components/MultiInput";

import actions from "../../actions";
import { isEmpty } from "../../utils/objectHelpers";

const origin = {
  form: {}
};

class FormManager extends Component {
  constructor(props) {
    super(props);

    this.state = { ...origin };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClearAlert = this.handleClearAlert.bind(this);
  }

  componentDidMount() {
    const { namespace, fields } = this;
    this.props.dispatch(actions.init_fields(namespace, fields));
  }

  handleOnChange(name, value) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleOnSubmit() {
    this.props.onSubmit(this.state.form);
  }

  handleClearAlert() {
    this.props.dispatch(actions.clear_alert(this.namespace));
  }

  renderSubmit({ label = "" } = {}) {
    return (
      <Col className="text-center">
        <Button color="primary" onClick={this.handleOnSubmit}>
          {label}
        </Button>
      </Col>
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
      case "multiText":
        return (
          <MultiInput {...field} name={name} onChange={this.handleOnChange} />
        );

      case "rating":
        return <Rating {...field} name={name} onChange={this.handleOnChange} />;

      default:
        return <Input {...field} name={name} onChange={this.handleOnChange} />;
    }
  }

  renderFields() {
    this.initFields();

    const { fields } = this.props;
    const fieldsList = Object.keys(fields);
    return fieldsList.map(name => this.renderField(name));
  }

  initFields() {
    let { form } = this.state;
    if (!isEmpty(form)) return;

    const { fields } = this.props;
    const fieldsList = Object.keys(fields);
    fieldsList.forEach(name => {
      const { value } = fields[name];
      if (value instanceof Array) {
        form[name] = [];
      } else {
        form[name] = value;
      }
    });
  }

  render() {
    return null;
  }
}

export default FormManager;
