import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Row, Col, Label, Button, Badge } from "reactstrap";

const origin = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };

    this.startRecording = this.startRecording.bind(this);
  }

  componentDidMount() {
    const propExists = Object.keys(this.props.settings).length;

    if (!propExists) {
      this.props.dispatch({ type: "saga_fetch_settings" });
    }
  }

  startRecording() {}

  renderHistory() {
    const { settings } = this.props;

    return (
      <Col>
        <Label size="lg">History</Label>
        {Object.keys(settings).map(key => {
          if (settings[key]) {
            return <Col>{`history for ${key}`}</Col>;
          }
        })}
      </Col>
    );
  }

  render() {
    if (!this.props.authenticated) return <div id="welcome" />;

    return (
      <Col
        xs={{ size: 12 }}
        md={{ size: 10, offset: 1 }}
        lg={{ size: 8, offset: 2 }}
      >
        <Col
          xs={{ size: 4, offset: 8 }}
          className="align-items-baseline text-right"
        >
          <Button
            id="button-recording"
            color="danger"
            onClick={this.startRecording}
          />
          <Badge color="warning">Click to start recording...</Badge>
        </Col>

        {this.renderHistory()}
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authentication.authenticated,
  settings: state.profile.settings
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
