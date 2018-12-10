import React from "react";
import { Col } from "reactstrap";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

import Header from "./views/headerView";
import loginView from "./views/loginView";
import registerView from "./views/registerView";

import Home from "./layouts/Home";

const middlewares = [thunkMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Col
            xs={12}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/login" component={loginView} />
            <Route path="/register" component={registerView} />
          </Col>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
