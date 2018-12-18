import React, { Component } from "react";
import {
  Input,
  Row,
  Col,
  Button,
  Alert,
  FormFeedback,
  Label
} from "reactstrap";
import Rating from "react-rating";

import actions from "../../actions";
import { isEmpty } from "../../utils/objectHelpers";
import { removeIndex } from "../../utils/arrayHelpers";

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

  setFormValue(name, value) {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setFormValue(name, value);
  }

  handleAddItem(event, index) {
    const { name, value } = event.target;
    let modified = this.state.form[name];
    modified[index] = value;

    this.setFormValue(name, modified);
  }

  handleRemoveItem(name, index) {
    const value = this.state.form[name];
    this.setFormValue(name, removeIndex(value, index));
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
    const { desc, type, cssFor } = field;

    const value = this.state.form[name];

    switch (type) {
      case "multiText":
        return (
          <Row className="half-margin-bottom">
            <Col xs={2} className="text-right">
              <Label>{field.label}</Label>
            </Col>
            {value.concat("").map((item, index) => (
              <Col xs={2}>
                <Input
                  {...field}
                  name={name}
                  value={item || ""}
                  onChange={event => this.handleAddItem(event, index)}
                />
                {index !== value.length && (
                  <span
                    className="fas fa-minus-circle button-remove"
                    onClick={() => this.handleRemoveItem(name, index)}
                  />
                )}
              </Col>
            ))}
          </Row>
        );

      case "rating":
        return (
          <Row>
            <Col xs={2} className="text-right">
              <Label>{field.label}</Label>
            </Col>
            <Col xs={4}>
              <Rating
                {...field}
                {...cssFor}
                name={name}
                value={value} // DEBUG
                onChange={value => this.setFormValue(name, value)} // TODO
              />
            </Col>
          </Row>
        );

      default:
        return (
          <Row className="half-margin-bottom">
            {field.label && (
              <Label xs={2} className="text-right">
                {field.label}
              </Label>
            )}
            <Col xs={field.label ? 9 : 12}>
              <Input
                {...field}
                name={name}
                value={value}
                onChange={this.handleOnChange}
                invalid={desc && desc.length}
              />
              {desc && desc.map(item => <FormFeedback>{item}</FormFeedback>)}
            </Col>
          </Row>
        );
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
        form[name] = new Array();
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
