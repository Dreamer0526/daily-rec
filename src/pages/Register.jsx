import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <Form id="form-register">
        <Input
          name="username"
          placeholder="User Name"
          value={username}
          onChange={this.handleOnChange.bind(this)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.handleOnChange.bind(this)}
        />
        <Button onClick={() => console.log(this.state)}> Register </Button>
      </Form>
    );
  }
}

export default Register;
