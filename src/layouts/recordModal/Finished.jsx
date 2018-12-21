import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "reactstrap";

import Waiting from "../../static/images/waiting.png";
import Success from "../../static/images/success.png";
import Failure from "../../static/images/warning.png";

const NAMESPACE = "records";

const origin = {
  status: "waiting"
};

class Finished extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };

    this.registry = {
      waiting: {
        pic: Waiting,
        desc: "Please wait a moment..."
      },
      success: {
        pic: Success,
        desc: "Records saved successfully!",
        button: {
          type: "success",
          lable: "Go to home page"
        }
      },
      failure: {
        pic: Failure,
        desc:
          "Something wrong happened. Your recored will be staged for a while, please try again later.",
        button: {
          type: "warning",
          lable: "Got it"
        }
      }
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "saga_patch_records"
    });
  }

  render() {
    const { patchResponse } = this.props;
    const status = patchResponse || this.state.status;
    const config = this.registry[status];

    return (
      <Row className="text-center">
        <Col xs="12" className="base-margin-bottom">
          <img src={config.pic} out={status} />
        </Col>
        <Col xs="12" className="base-margin-bottom">
          {config.desc}
        </Col>
        {config.button && (
          <Col xs="12" className="base-margin-bottom">
            <Button color={config.button.type} onClick={this.props.onNext}>
              {config.button.lable}
            </Button>
          </Col>
        )}
      </Row>
    );
  }
}

const mapStateToProps = state => state.records.responses;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finished);
