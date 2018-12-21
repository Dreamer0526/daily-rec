import React from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";

import FormManager from "../../components/FormManager";
import loginFields from "./loginFields";

const NAMESPACE = "login";

class Login extends React.Component {
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
          fields={loginFields}
          namespace={NAMESPACE}
        />
      </Col>
    );
  }
}

const mapStateToProps = state => state.login;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
