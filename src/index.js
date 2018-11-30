import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';
import Test, {reducer} from './Test.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/_app-styleguide.scss";

let store = createStore(reducer)

ReactDOM.render( 
  <Provider store={store}>
    <Test /> 
  </Provider>, 
  document.getElementById('root')
);