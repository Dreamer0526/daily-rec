import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Link from "./Link";

import logoUrl from "../static/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.goToHomePage = this.goToHomePage.bind(this);
  }

  goToHomePage() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div id="app-header">
        <Row className="align-items-center">
          <Col xs={{ size: 3, offset: 1 }}>
            <Row className="align-items-center">
              <img
                id="app-logo"
                src={logoUrl}
                alt="logo"
                onClick={this.goToHomePage}
              />
              <span id="app-name">Daily Record</span>
            </Row>
          </Col>
          <Col xs={{ size: 3, offset: 5 }}>
            <Link name="login" color="info" />
            <Link name="register" color="warning" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Header);
