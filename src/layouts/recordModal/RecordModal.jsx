import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Diet from "./Diet";

class RecordModal extends React.Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
  }

  onNext() {
    console.log("next");
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
          <Diet onNext={this.onNext} />
        </ModalBody>
      </Modal>
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
)(RecordModal);
