import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, BrowserRouter, hashHistory as history } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import App from './components/App';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
