import React, { Component } from "react";
import { Form, Input, Button, Fade, Row, Alert } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <Form id="form-register">
        <Row className="half-margin-bottom">
          <Input
            name="username"
            placeholder="User Name"
            // value={username}
            onFocus={this.handleOnFocus}
            onChange={this.handleOnChange}
          />
          {/* <Fade in={desc.username} tag={"span"}>
            {desc.username}
          </Fade> */}
        </Row>
        <Row className="half-margin-bottom">
          <Input
            name="password"
            type="password"
            placeholder="Password"
            // value={password}
            onFocus={this.handleOnFocus}
            onChange={this.handleOnChange}
          />
          {/* <Fade in={desc.password} tag={"span"}>
            {desc.password}
          </Fade> */}
        </Row>
        <Button
          outline
          color="primary"
          // onClick={this.handleOnSubmit}
        >
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
