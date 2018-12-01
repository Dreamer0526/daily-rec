import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from "./Link";

import logoUrl from "../static/images/logo.png";

class Header extends Component {
  render() {
    return (
      <div id="app-header">
        <Row className="half-margin-top align-items-center">
          <Col xs={{ size: 3, offset: 1 }}>
            <Row className="align-items-center">
              <img id="app-logo" src={logoUrl} alt="logo" />
              <span id="app-name" className="half-padding-left">
                Daily React
              </span>
            </Row>
          </Col>
          <Col xs={{ size: 2, offset: 6 }}>
            <Link type="login" />
            <Link type="register" />
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default Header;
