import React from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";

import FormManager from "../../components/FormManager";
import registerFields from "./registerFields";

const NAMESPACE = "register";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col
        xs={{ size: 12 }}
        md={{ size: 10, offset: 1 }}
        lg={{ size: 8, offset: 2 }}
      >
        <FormManager
          {...this.props}
          fields={registerFields}
          namespace={NAMESPACE}
        />
      </Col>
    );
  }
}

const mapStateToProps = state => state.register;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
