import React, { Component } from "react";

export class Col extends Component {
  render() {
    const {
      width = "12",
      offset = "0",
      className = "",
      children,
      ...rest
    } = this.props;

    return (
      <div className={`col-${width} offset-${offset} ${className}`} {...rest}>
        {React.Children.map(children, child => child)}
      </div>
    );
  }
}

export class Row extends Component {
  render() {
    const { className = "", children, ...rest } = this.props;

    return (
      <div className={`row ${className}`} {...rest}>
        {React.Children.map(children, child => child)}
      </div>
    );
  }
}
