import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Label, Button, Badge } from "reactstrap";

import RecordModal from "../recordModal/RecordModal";
import { isEmpty } from "../../utils/objectHelpers";

const origin = {
  showModal: false
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };

    this.onToggle = this.onToggle.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  componentDidMount() {
    const { dispatch, settings } = this.props;

    dispatch({ type: "saga_fetch_records" });

    if (isEmpty(settings)) {
      dispatch({ type: "saga_fetch_settings" });
    }
  }

  onToggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  startRecording() {
    this.setState({ showModal: true });
  }

  renderHistory() {
    const { settings } = this.props;

    return (
      <Col>
        <Label size="lg">History</Label>
        {Object.keys(settings).map(
          key => settings[key] && <Col>{`history for ${key}`}</Col>
        )}
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
        <Col xs={{ size: 4, offset: 8 }} className="text-right">
          <Button
            id="button-recording"
            color="danger"
            onClick={this.onToggle}
          />
          <Badge color="warning">Click to start recording...</Badge>
        </Col>
        {this.state.showModal && <RecordModal onToggle={this.onToggle} />}
        {this.renderHistory()}
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.header.authentication.authenticated,
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
