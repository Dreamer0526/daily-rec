import React from "react";
import Rating from "react-rating";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Col,
  Row
} from "reactstrap";

const origin = {
  date: new Date().toLocaleDateString().replace(/\//g, "-")
};

class Diet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...origin };
  }

  render() {
    const ratingStyles = {
      className: "colored-rating",
      emptySymbol: "far fa-star",
      fullSymbol: [1, 2, 3, 4, 5].map(id => `fas fa-star rating-step-${id}`)
    };

    return (
      <Modal size="lg" isOpen={this.props.show}>
        <ModalHeader
          className="base-padding-left"
          close={
            <button className="close" onClick={this.props.onToggle}>
              &times;
            </button>
          }
        >
          Diet
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs={4} className="text-right">
              <Label>Date</Label>
            </Col>
            <Col xs={4}>
              <Input
                xs={8}
                type="date"
                value={this.state.date}
                onChange={event => this.setState({ date: event.target.value })}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={4} className="text-right">
              <Label>Rating</Label>
            </Col>
            <Col xs={4}>
              <Rating
                {...ratingStyles}
                onChange={value => console.log(value)}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}

export default Diet;
