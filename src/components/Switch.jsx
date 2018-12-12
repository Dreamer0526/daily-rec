import React from "react";
import ToggleButton from "react-toggle-button";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || false
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    const { value } = this.state;
    this.setState({ value: !value });

    const { onToggle } = this.props;
    if (onToggle && typeof onToggle === "function") {
      onToggle();
    }
  }

  render() {
    return (
      <ToggleButton
        id="tog"
        value={this.state.value}
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
            hover: "rgb(21, 87, 36)"
          },
          inactive: {
            base: "rgb(201, 201, 201)",
            hover: "rgb(107, 107, 107)"
          }
        }}
      />
    );
  }
}

export default Switch;
