import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { findLinkConfig } from "./linksRegistry";

class Link extends Component {
  constructor(props) {
    super(props);

    this.config = findLinkConfig(this.props.name);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { onClick } = this.props;
    if (onClick && typeof onClick === "function") {
      onClick();
    } else {
      this.props.history.push(this.config.path);
    }
  }

  render() {
    return (
      <Button
        className="links"
        color={this.props.color}
        onClick={this.handleOnClick}
      >
        {this.config.label}
      </Button>
    );
  }
}
Link.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};

Link.defaultProps = {
  name: "register",
  color: "link"
};

export default withRouter(Link);
