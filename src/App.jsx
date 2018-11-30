import React, { Component } from "react";
import { Col } from "reactstrap";

import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

import registerLayout from "./containers/registerLayout";

const store = createStore(
  reducers,
  // redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
            <Col xs={12} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={registerLayout} />
            </Col>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
