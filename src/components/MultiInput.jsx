import React from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { removeIndex } from "../utils/arrayHelpers";

class MultiInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  handleAddItem(event, index) {
    const { name, value } = event.target;
    let modified = this.state.value;
    modified[index] = value;

    this.setState({
      value: modified
    });

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, modified);
    }
  }

  handleRemoveItem(index) {
    const { name } = this.props;
    const { value } = this.state;
    const modified = removeIndex(value, index);

    this.setState({
      value: modified
    });

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, modified);
    }
  }

  render() {
    const { desc, label, name, ...rest } = this.props;
    const { value } = this.state;

    return (
      <Row className="half-margin-bottom">
        <Col xs={2} className="text-right">
          <Label>{label}</Label>
        </Col>
        {value.concat("").map((item, index) => (
          <Col xs={2}>
            <Input
              {...rest}
              name={name}
              value={item || ""}
              onChange={event => this.handleAddItem(event, index)}
            />
            {index !== value.length && (
              <span
                className="fas fa-minus-circle button-remove"
                onClick={() => this.handleRemoveItem(index)}
              />
            )}
          </Col>
        ))}
      </Row>
    );
  }
}

export default MultiInput;
