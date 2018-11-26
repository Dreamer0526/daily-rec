import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="container-fluid">
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/details" component={Details} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
