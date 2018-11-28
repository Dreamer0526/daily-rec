import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Col } from "reactstrap";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
          <Col xs={12} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Col>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
