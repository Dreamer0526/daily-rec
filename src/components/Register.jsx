import React, { Component } from "react";
import { Form, Input, Button, Fade, Row, Alert } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.valid) {
      const { username, password } = this.state;
      this.props.submit({ username, password });
    }
  }

  handleOnFocus(event) {
    this.props.onFocus(event.target.name);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit() {
    const { username, password } = this.state;
    this.props.onClickSubmit({ username, password });
  }

  render() {
    const { username, password } = this.state;
    const { alert = {}, desc } = this.props;

    return (
      <Form id="form-register">
        {alert.desc && (
          <Alert color={alert.type}>
            {alert.desc}
            {alert.type === "success" && (
              <Button
                color="link"
                onClick={() => this.props.history.push("/login")}
              >
                Sign In
              </Button>
            )}
          </Alert>
        )}
        <Row className="half-margin-bottom">
          <Input
            name="username"
            placeholder="User Name"
            value={username}
            onFocus={this.handleOnFocus}
            onChange={this.handleOnChange}
          />
          <Fade in={desc.username} tag={"span"}>
            {desc.username}
          </Fade>
        </Row>
        <Row className="half-margin-bottom">
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onFocus={this.handleOnFocus}
            onChange={this.handleOnChange}
          />
          <Fade in={desc.password} tag={"span"}>
            {desc.password}
          </Fade>
        </Row>
        <Button
          outline
          color="primary"
          disabled={false}
          onClick={this.handleOnSubmit}
        >
          Register
        </Button>
      </Form>
    );
  }
}

export default Register;
