import React from "react";
import { connect } from "react-redux";
import { Form, Col } from "reactstrap";
import FormManager from "../templates/formManager/FormManager";
import Switch from "../components/Switch";

import { isEqual } from "../utils/objectHelpers";

const NAMESPACE = "profile";

const origin = {
  form: {}
};

class Profile extends FormManager {
  constructor(props) {
    super(props);
    this.state = { ...origin };
  }

  componentDidMount() {
    this.props.dispatch({
      type: "saga_fetch_settings"
    });
  }

  componentDidUpdate() {
    const { settings } = this.props;
    if (!isEqual(settings, this.state.form)) {
      this.setState({ form: settings });
    }
  }

  onToggle(setting, value) {
    let { form } = this.state;
    form[setting] = value;
    this.setState({ form });
  }

  render() {
    const { info, settings } = this.props;
    const { username, email } = info;

    return (
      <Form>
        <Col xs={12}> {this.renderAlert()}</Col>

        <Col xs={12}>User Name: {username}</Col>
        <Col xs={12}>Email: {email}</Col>

        {Object.keys(settings).map(setting => {
          const value = settings[setting];
          return (
            <Col xs={12}>
              {setting}:
              <Switch
                onToggle={value => this.onToggle(setting, value)}
                value={value}
              />
            </Col>
          );
        })}

        <Col xs={12}> {this.renderSubmit({ label: "Update" })} </Col>
      </Form>
    );
  }
}

const mapStateToProps = state => state.profile;

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
  onSubmit: payload =>
    dispatch({ type: "saga_patch_settings", payload, namespace: NAMESPACE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
