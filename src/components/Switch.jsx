import React from "react";
import { Row, Col, Label } from "reactstrap";
import ToggleButton from "react-toggle-button";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    const { name, value, onToggle } = this.props;
    if (onToggle && typeof onToggle === "function") {
      onToggle(name, !value);
    }
  }

  render() {
    const { name, value, label, ...rest } = this.props;

    return (
      <Row>
        <Label xs={3} className="text-right">
          {label}
        </Label>
        <Col xs="9">
          <span className="toggle-button">
            <ToggleButton
              name={name}
              value={value}
              onToggle={this.onToggle}
              thumbStyle={{ borderRadius: 3 }}
              trackStyle={{ borderRadius: 4 }}
              colors={{
                // activeThumb: {
                //   base: "rgb(250,250,250)"
                // },
                // inactiveThumb: {
                //   base: "rgb(62,130,247)"
                // },
                active: {
                  base: "rgb(195, 230, 203)",
                  hover: "rgb(51, 136, 72)"
                },
                inactive: {
                  base: "rgb(201, 201, 201)",
                  hover: "rgb(107, 107, 107)"
                }
              }}
            />
          </span>
        </Col>
      </Row>
    );
  }
}

export default Switch;
