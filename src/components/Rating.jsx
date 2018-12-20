import React from "react";
import ReactRating from "react-rating";
import { Row, Col, Label } from "reactstrap";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    const { name, onChange } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(name, value);
    }
  }

  render() {
    const { desc, label, name, value, cssFor, ...rest } = this.props;

    return (
      <Row>
        <Col xs={2} className="text-right">
          <Label>{label}</Label>
        </Col>
        <Col>
          <ReactRating
            {...rest}
            {...cssFor}
            name={name}
            initialRating={value}
            onChange={this.handleOnChange}
          />
        </Col>
      </Row>
    );
  }
}

export default Rating;
