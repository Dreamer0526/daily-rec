import React from "react";

import Checked from "../static/images/check.png";
import Unchecked from "../static/images/uncheck.png";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value = false } = this.props;
    const img = value ? Checked : Unchecked;

    return (
      <img
        src={img}
        width="60px"
        alt="checkbox"
        onClick={this.props.onChange}
      />
    );
  }
}

export default Checkbox;
