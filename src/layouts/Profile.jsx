import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Col, Label, Input } from "reactstrap";
import FormManager from "../templates/formManager/FormManager";
import Switch from "../components/Switch";

const NAMESPACE = "profile";

const origin = {
  form: {}
};

class Profile extends FormManager {
  constructor(props) {
    super(props);
    this.state = { ...origin };

    this.namespace = NAMESPACE;
  }

  componentDidMount() {
    const propExists = Object.keys(this.props.settings).length;

    if (!propExists) {
      this.props.dispatch({ type: "saga_fetch_settings" });
    }
  }

  onToggle(setting, value) {
    let { form } = this.state;
    form[setting] = value;
    this.setState({ form });
  }

  renderInfo() {
    const { username, email } = this.props.info;

    return (
      <Col xs={12}>
        <Label size="lg" xs={{ size: 10, offset: 1 }}>
          User Info
        </Label>
        <FormGroup row>
          <Label xs={4} className="text-right">
            User Name:
          </Label>
          <Col xs={6}>
            <Input value={username} disabled />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label xs={4} className="text-right">
            Email:
          </Label>
          <Col xs={6}>
            <Input value={email} disabled />
          </Col>
        </FormGroup>
      </Col>
    );
  }

  renderSettings() {
    const { settings } = this.props;

    return (
      <Col xs={12}>
        <Label size="lg" xs={{ size: 10, offset: 1 }}>
          Settings
        </Label>
        {Object.keys(settings).map(setting => {
          const value = settings[setting];
          return (
            <Col>
              <Label xs={4} className="text-right">
                {setting}:
              </Label>
              <Switch
                onToggle={value => this.onToggle(setting, value)}
                value={value}
              />
            </Col>
          );
        })}
        <Col className="base-margin-top">
          {this.renderSubmit({ label: "Update" })}
        </Col>
      </Col>
    );
  }

  render() {
    return (
      <Form>
        <Col xs={12}> {this.renderAlert()}</Col>
        {this.renderInfo()}
        {this.renderSettings()}
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
