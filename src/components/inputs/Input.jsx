import React from "react";
import { Row, Col, Label, FormFeedback, Input as InputField } from "reactstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, value);
    }
  }

  render() {
    const { desc, label, name, value, ...rest } = this.props;

    return (
      <Row className="half-margin-bottom">
        {label && (
          <Label xs={3} className="text-right">
            {label}
          </Label>
        )}
        <Col xs={label ? 9 : 12}>
          <InputField
            {...rest}
            name={name}
            value={value}
            onChange={this.handleOnChange}
            invalid={desc.length}
          />
          {desc.map(item => (
            <FormFeedback>{item}</FormFeedback>
          ))}
        </Col>
      </Row>
    );
  }
}

export default Input;
