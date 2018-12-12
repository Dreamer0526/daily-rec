import React from "react";
import { connect } from "react-redux";
import { Row, Col, Alert } from "reactstrap";

const NAMESPACE = "profile";

class Register extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>User Name: {this.props.username}</Col>
        <Col xs={12}>Email: {this.props.email}</Col>
        <Col xs={12}>Config: {this.props.Config}</Col>
      </Row>
    );
  }
}

const mapStateToProps = state => state.profile;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
