import React, { Component } from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { findLinkConfig } from "./metadata/linksRegistry";

class Link extends Component {
  constructor(props) {
    super(props);

    this.config = findLinkConfig(this.props.type);
  }

  render() {
    const { path, label } = this.config;
    return (
      <Button color="link" onClick={() => this.props.history.push(path)}>
        {label}
      </Button>
    );
  }
}

export default withRouter(Link);
