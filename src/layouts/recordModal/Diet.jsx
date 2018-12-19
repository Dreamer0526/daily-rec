import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import FormManager from "../../templates/formManager/FormManager";
import dietFields from "../../fields/dietFields";

const NAMESPACE = "diet";

class Diet extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    const { onNext } = this.props;
    if (onNext && typeof onNext === "function") {
      onNext();
    }
  }

  render() {
    const nextComponent = this.props.hasNext ? (
      <i class="fas fa-chevron-right fa-2x general-button" />
    ) : null;

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
        <Col xs="10">
          <FormManager
            {...this.props}
            namespace={NAMESPACE}
            fields={dietFields}
            submitComponent={nextComponent}
          />
        </Col>
        <Col xs="1" />
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
