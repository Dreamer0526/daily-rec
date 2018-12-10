import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Link from "../components/Link";
import logoUrl from "../static/images/logo.png";

import actions from "../actions";

const origin = {
  showDropdownItem: false
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };

    this.goToHomePage = this.goToHomePage.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: "saga_verify_auth" });
  }

  goToHomePage() {
    this.props.history.push("/");
  }

  handleLogout() {
    this.props.dispatch(actions.logout());
  }

  handleOnToggle() {
    const { showDropdownItem } = this.state;
    this.setState({ showDropdownItem: !showDropdownItem });
  }

  render() {
    const { authenticated, username } = this.props.authentication;

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

          {authenticated ? (
            <Col xs={{ size: 2, offset: 6 }}>
              <Dropdown
                isOpen={this.state.showDropdownItem}
                toggle={this.handleOnToggle}
              >
                <DropdownToggle caret color="info">
                  Hi, {username}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.handleLogout}>
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          ) : (
            <Col xs={{ size: 3, offset: 5 }}>
              <Link name="login" color="info" />
              <Link name="register" color="warning" />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
