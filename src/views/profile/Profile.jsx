import React from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";

import FormManager from "../../components/FormManager";
import profileFields from "./profileFields";

import { isEmpty } from "../../utils/objectHelpers";

const NAMESPACE = "profile";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (isEmpty(this.props.settings)) {
      this.props.dispatch({ type: "saga_fetch_settings" });
    }
  }

  updateFields() {
    const createSwitchField = (name, value) => ({
      [name]: {
        type: "switch",
        label: name,
        value
      }
    });

    let modified = profileFields;

    const { settings } = this.props;
    Object.keys(settings).map(setting => {
      const value = settings[setting];
      modified = {
        ...modified,
        ...createSwitchField(setting, value)
      };
    });

    return modified;
  }

  render() {
    const { settings } = this.props;
    if (isEmpty(settings)) return null;

    const fields = this.updateFields();

    return (
      <Col xs="12">
        <FormManager
          {...this.props}
          fields={fields}
          namespace={NAMESPACE}
          initialForm={this.props.info}
        />
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  info: {
    username: state.header.authentication.username,
    email: state.header.authentication.email
  },
  settings: state.profile.settings
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
