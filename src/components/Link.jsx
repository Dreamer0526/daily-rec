import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { findLinkConfig } from "./metadata/linksRegistry";

class Link extends Component {
  constructor(props) {
    super(props);

    this.config = findLinkConfig(this.props.name);
  }

  render() {
    const { path, label } = this.config;
    return (
      <Button
        className="links"
        color={this.props.color}
        onClick={() => this.props.history.push(path)}
      >
        {label}
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
