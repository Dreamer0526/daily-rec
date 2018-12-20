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
    this.initState();
    this.initReducerState();
  }

  initState() {
    const { initialForm, fields } = this.props;

    let form = {}
    if(initialForm && !isEmpty(initialForm)) {
      form = initialForm;

    } else {
      Object.keys(fields).forEach(name => {
        const { value } = fields[name];
        if (value instanceof Array) {
          form[name] = [];
        } else {
          form[name] = value;
        }
      });
    }

    this.setState({form})
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

  handleOnSubmit() {
    const action = {
      type: "saga_submit",
      namespace: this.props.namespace,
      payload: {
        form: this.state.form,
        fields: this.props.fields
      }
    };

    this.props.dispatch(action);
  }

  handleClearAlert() {
    this.props.dispatch(actions.clear_alert(this.props.namespace));
  }

  renderSubmit({ label }) {
    const buttonComponent = this.props.submitComponent || (
      <Button color="primary">{label}</Button>
    );
    return (
      <Col className="text-center general-button" onClick={this.handleOnSubmit}>
        {buttonComponent}
      </Col>
    );
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
      case "multiText":
        return (
          <MultiInput {...field} name={name} value={value} onChange={this.handleOnChange} />
        );

      case "rating":
        return <Rating {...field} name={name} value={value} onChange={this.handleOnChange} />;

      case "submit":
        return this.renderSubmit(field);

      default:
        return <Input {...field} name={name} value={value} onChange={this.handleOnChange} />;
    }
  }

  renderFields() {
    const fieldsList = Object.keys(this.props.fields);
    return fieldsList.map(name => this.renderField(name));
  }

  render() {
    const {form} = this.state;
    if (isEmpty(form)) return null;

    return (
      <div>
        {this.renderAlert()}
        {this.renderFields()}
      </div>
    );
  }
}

export default FormManager;
