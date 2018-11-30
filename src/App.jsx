import React from "react";
import { Col } from "reactstrap";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

import registerLayout from "./containers/registerLayout";

const middlewares = [ thunkMiddleware ];

const store = createStore(
  reducers, 
  composeWithDevTools(applyMiddleware(...middlewares))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Col
            xs={12}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={registerLayout} />
          </Col>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
