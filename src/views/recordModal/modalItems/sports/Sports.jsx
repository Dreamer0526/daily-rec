import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import FormManager from "../../../../components/FormManager";
import sportsFields from "./sportsFields";

const NAMESPACE = "records.sports";

class Sports extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="align-items-center">
        <Col xs="12" md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
          <FormManager
            {...this.props}
            namespace={NAMESPACE}
            fields={sportsFields}
            initialForm={this.props.stagedForm}
            onSubmit={this.props.onNext}
            onReset={this.props.onPrev}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => state.records.sports;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sports);
