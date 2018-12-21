import React, { Component } from "react";
import { Row, Col, Button, Alert, Label } from "reactstrap";

import Input from "./inputs/Input";
import Rating from "./inputs/Rating";
import Switch from "./inputs/Switch";
import MultiInput from "./inputs/MultiInput";

import { actions } from "../reducers";
import { isEmpty } from "../utils/objectHelpers";

const origin = {
  form: {}
};

class FormManager extends Component {
  constructor(props) {
    super(props);

    this.state = { ...origin };

    this.handleOnReset = this.handleOnReset.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClearAlert = this.handleClearAlert.bind(this);
  }

  componentDidMount() {
    this.initState();
    this.initReducerState();
  }

  initState() {
    const { initialForm, fields } = this.props;

    let form = {};
    Object.keys(fields).forEach(name => {
      const { value } = fields[name];
      if (value instanceof Array) {
        form[name] = [];
      } else {
        form[name] = value;
      }
    });

    form = {
      ...form,
      ...initialForm
    };

    this.setState({ form });
  }

  initReducerState() {
    const initialState = {
      alert: {
        type: "",
        desc: ""
      },
      valid: false
    };

    this.props.dispatch({
      namespace: this.props.namespace,
      desc: "Init redux state in FormManager",
      type: "SET_STATE",
      state: initialState
    });
  }

  handleOnChange(name, value) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleOnReset() {
    const { onReset } = this.props;
    if (onReset && typeof onReset === "function") {
      onReset();
    }
  }

  handleOnSubmit() {
    const { dispatch, onSubmit } = this.props;

    dispatch({
      type: "saga_submit",
      namespace: this.props.namespace,
      payload: {
        form: this.state.form,
        fields: this.props.fields
      }
    });

    if (onSubmit && typeof onSubmit === "function") {
      onSubmit();
    }
  }

  handleClearAlert() {
    this.props.dispatch(actions.clear_alert(this.props.namespace));
  }

  renderAlert() {
    const { alert = {} } = this.props;
    const { desc = "", type = "" } = alert;
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
    const value = this.state.form[name];

    switch (type) {
      case "submit":
      case "buttonGroup":
        // Buttons with functionality of submiting will be rendered last
        return null;

      case "multiText":
        return (
          <MultiInput
            {...field}
            name={name}
            value={value}
            onChange={this.handleOnChange}
          />
        );

      case "rating":
        return (
          <Rating
            {...field}
            name={name}
            value={value}
            onChange={this.handleOnChange}
          />
        );

      case "label":
        return (
          <Label
            size={field.size}
            xs={{ size: 10, offset: 1 }}
            className="base-margin-top half-margin-bottom"
          >
            {field.text}
          </Label>
        );

      case "switch":
        return (
          <Switch
            {...field}
            name={name}
            value={value}
            onToggle={this.handleOnChange}
          />
        );

      default:
        return (
          <Input
            {...field}
            name={name}
            value={value}
            onChange={this.handleOnChange}
          />
        );
    }
  }

  renderSubmit() {
    const { fields } = this.props;
    const name = Object.keys(fields).find(name =>
      ["submit", "buttonGroup"].includes(fields[name].type)
    );

    const field = fields[name];
    const { type } = field;

    return type === "submit" ? (
      <Col className="text-center base-margin-top">
        <Button color="primary" onClick={this.handleOnSubmit}>
          {field.label}
        </Button>
      </Col>
    ) : (
      <Row className="base-margin-top">
        <Col xs={{ size: 2, offset: 4 }}>
          <Button color="secondary" onClick={this.handleOnReset}>
            {field.labels[1]}
          </Button>
        </Col>
        <Col xs={{ size: 2, offset: 0 }}>
          <Button color="primary" onClick={this.handleOnSubmit}>
            {field.labels[0]}
          </Button>
        </Col>
      </Row>
    );
  }

  renderFields() {
    const fieldsList = Object.keys(this.props.fields);
    return fieldsList.map(name => this.renderField(name));
  }

  render() {
    const { form } = this.state;
    if (isEmpty(form)) return null;

    return (
      <div>
        {this.renderAlert()}
        {this.renderFields()}
        {this.renderSubmit()}
      </div>
    );
  }
}

export default FormManager;
