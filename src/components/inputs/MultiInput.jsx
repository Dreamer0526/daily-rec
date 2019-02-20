import React from "react";
import { Row, Col, Label, Input } from "reactstrap";
import { removeIndex } from "../../utils/arrayHelpers";

class MultiInput extends React.Component {
  handleAddItem(event, index) {
    const { name, value } = event.target;
    let modified = this.props.value;
    modified[index] = value;

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, modified);
    }
  }

  handleRemoveItem(index) {
    const { name, value } = this.props;
    const modified = removeIndex(value, index);

    const { onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, modified);
    }
  }

  render() {
    const { desc, label, value, name, ...rest } = this.props;

    return (
      <Row className="half-margin-bottom">
        <Col xs={3} className="text-right">
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
