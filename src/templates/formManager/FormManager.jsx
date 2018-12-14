import React, { Component } from "react";
import { Input, Row, Col, Button, Alert, FormFeedback } from "reactstrap";

import actions from "../../actions";

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
    const { desc } = field;

    // const { type } = field;

    // switch (type) {
    //   case "text":
    //   case "password":
    return (
      <Row className="half-margin-bottom">
        <Input
          {...field}
          name={name}
          value={this.state.form[name]}
          onChange={this.handleOnChange}
          invalid={desc && desc.length}
        />
        {desc && desc.map(item => <FormFeedback>{item}</FormFeedback>)}
      </Row>
    );

    //   default:
    //     return null;
    // }
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
