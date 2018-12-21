import React from "react";
import { connect } from "react-redux";
import DoublyLinked from "doublylinked";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import Diet from "./Diet";
import Sports from "./Sports";
import Finished from "./Finished";

const registry = {
  diet: Diet,
  sports: Sports,
  finished: Finished
};

const origin = {
  modalToShow: ""
};

class RecordModal extends React.Component {
  constructor(props) {
    super(props);
    this.contentList = this.initList();

    this.state = { ...origin };

    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentDidMount() {
    this.setState({
      modalToShow: this.contentList.next()
    });
  }

  initList() {
    const { settings } = this.props;
    const contents = Object.keys(settings).filter(
      key => settings[key] === true
    );
    return new DoublyLinked(...contents, "finished");
  }

  onPrev() {
    const prevModal = this.contentList.prev();
    if (prevModal) {
      this.setState({ modalToShow: prevModal });
    }
  }

  onNext() {
    const nextModal = this.contentList.next();
    const modalToShow = nextModal || "";
    this.setState({ modalToShow });
  }

  render() {
    const { modalToShow } = this.state;
    if (!modalToShow) return null;

    const Component = registry[modalToShow] || null;

    return (
      <Modal size="lg" isOpen={true}>
        <ModalHeader
          className="base-padding-left"
          close={
            <span
              className="fas fa-times general-button"
              onClick={this.props.onToggle}
            />
          }
        >
          {modalToShow.toUpperCase()}
        </ModalHeader>
        <ModalBody>
          <Component
            hasNext={modalToShow !== this.contentList.tail.value}
            onNext={this.onNext}
            hasPrev={modalToShow !== this.contentList.head.value}
            onPrev={this.onPrev}
          />
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.profile.settings
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordModal);
