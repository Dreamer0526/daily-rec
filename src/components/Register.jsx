import React, { Component } from "react";
import { Form, Input, Button, Fade, Row, Alert } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    
    this.state = {
      username: "",
      password: ""
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]:  value });
  }

  handleOnSubmit() {
    const { username, password } = this.state;
    const form = {
      username,
      password
    };

    this.props.onSubmit(form);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Form id="form-register">
        <Alert color="warning"> alert from server </Alert>
        <Row className="half-margin-bottom">
          <Input 
            name="username" 
            placeholder="User Name" 
            value={username} 
            onChange={this.handleOnChange}
          />
          <Fade in={true} tag={"span"}>
            username desc
          </Fade>
        </Row>
        <Row className="half-margin-bottom">
          <Input 
            name="password" 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={this.handleOnChange} />
          <Fade in={true} tag={"span"}>
            password desc
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