import React from "react";
import { connect } from "react-redux";
import { Row, Col, Alert } from "reactstrap";
import Switch from "../components/Switch";

const NAMESPACE = "profile";

const origin = {};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };
    this.onToggle = this.onToggle.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "saga_fetch_setting"
    });
  }

  onToggle() {
    console.log("toggle");
  }

  render() {
    return (
      <Row>
        <Col xs={12}>User Name: {this.props.username}</Col>
        <Col xs={12}>Email: {this.props.email}</Col>
        <Col xs={12}>Config: {this.props.Config}</Col>
        <Switch onToggle={this.onToggle} />
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
