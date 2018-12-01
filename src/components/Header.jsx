import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from "./Link";

import logoUrl from "../static/images/logo.png";

class Header extends Component {
  render() {
    return (
      <div id="app-header">
        <Row className="align-items-center">
          <Col xs={{ size: 3, offset: 1 }}>
            <Row className="align-items-center">
              <img id="app-logo" src={logoUrl} alt="logo" />
              <span id="app-name" className="half-padding-left">
                Daily React
              </span>
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

export default Header;
