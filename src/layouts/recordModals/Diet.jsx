import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
            <span className="fas fa-times" onClick={this.props.onToggle} />
          }
        >
          Diet
        </ModalHeader>
        <ModalBody>{this.renderFields()}</ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}

const mapStateToProps = state => state.diet;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
  onSubmit: payload => {}
  // dispatch({ type: "saga_login", payload, namespace: NAMESPACE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Diet);
