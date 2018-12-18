import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import FormManager from "../../templates/formManager/FormManager";
import sportsFields from "../../fields/sportsFields";

const NAMESPACE = "sportsModal";

class Sports extends FormManager {
  constructor(props) {
    super(props);

    this.fields = sportsFields;
    this.namespace = NAMESPACE;

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.props.dispatch({
      namespace: this.namespace,
      type: "SET_STATE",
      state: {
        stagedRecord: this.state.form
      }
    });

    const { onNext } = this.props;
    if (onNext && typeof onNext === "function") {
      onNext();
    }
  }

  render() {
    return (
      <Row className="align-items-center">
        <Col xs="1">
          {this.props.hasPrev && (
            <i
              class="fas fa-chevron-left fa-2x general-button"
              onClick={this.props.onPrev}
            />
          )}
        </Col>
        <Col xs="10">{this.renderFields()}</Col>
        <Col xs="1">
          {this.props.hasNext && (
            <i
              class="fas fa-chevron-right fa-2x general-button"
              onClick={this.handleNext}
            />
          )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => state.sports;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sports);
