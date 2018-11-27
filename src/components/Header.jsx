import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import logoUrl from "../static/images/logo.png";

class Header extends Component {
  render() {
    return (
      <div id="app-header">
        <Row className="align-items-center">
          <Col xs={{ size: 3, offset: 1 }}>
            <img id="app-logo" src={logoUrl} alt="logo" />
          </Col>
          <Col xs={{ size: 2, offset: 6 }}>
            <h4>Daily Rec</h4>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default Header;
