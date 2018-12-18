import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";

import FormManager from "../../templates/formManager/FormManager";
import dietFields from "../../fields/dietFields";

const NAMESPACE = "dietModal";

class Diet extends FormManager {
  constructor(props) {
    super(props);

    this.fields = dietFields;
    this.namespace = NAMESPACE;
  }

  render() {
    return (
      <Modal size="lg" isOpen={this.props.show}>
        <ModalHeader
          className="base-padding-left"
          close={
            <span
              className="fas fa-times general-button"
              onClick={this.props.onToggle}
            />
          }
        >
          Diet
        </ModalHeader>
        <ModalBody>
          <Row className="align-items-center">
            <Col xs="11">
              {this.renderAlert()}
              {this.renderFields()}
            </Col>
            <Col xs="1">
              <i class="fas fa-chevron-right fa-2x general-button" />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = state => state.diet;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
  onSubmit: payload =>
    dispatch({ type: "saga_patch_record", payload, namespace: NAMESPACE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Diet);
