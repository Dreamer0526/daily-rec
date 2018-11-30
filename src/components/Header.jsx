import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

import logoUrl from "../static/images/logo.png";

class Header extends Component {   
  render() {
    return (
      <div id="app-header">
        <Row className="align-items-center">
          <Col xs={{ size: 3, offset: 1 }}>
            <img id="app-logo" src={logoUrl} alt="logo" />
            <span>Daily Rec</span>
          </Col>
          <Col xs={{ size: 2, offset: 6 }}>
            <Button onClick={() => this.props.history.push('/register')}>Sign Up</Button>
            <Button onClick={() => this.props.history.push('/login')}>Sign In</Button>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default withRouter(Header);
