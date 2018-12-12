import React from "react";
import { Col } from "reactstrap";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import saga from "./sagas";
import reducers from "./reducers";

import Header from "./layouts/Header";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Profile from "./layouts/Profile";

import Home from "./layouts/Home";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Col
            xs={12}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
          </Col>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
