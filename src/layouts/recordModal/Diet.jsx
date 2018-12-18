import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import FormManager from "../../templates/formManager/FormManager";
import dietFields from "../../fields/dietFields";

const NAMESPACE = "dietModal";

class Diet extends FormManager {
  constructor(props) {
    super(props);

    this.fields = dietFields;
    this.namespace = NAMESPACE;

    this.saveRecord = this.saveRecord.bind(this);
  }

  saveRecord() {
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
        <Col xs="11">{this.renderFields()}</Col>
        <Col xs="1">
          <i
            class="fas fa-chevron-right fa-2x general-button"
            onClick={this.saveRecord}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => state.diet;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Diet);
