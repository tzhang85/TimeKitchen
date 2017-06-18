import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './components/app'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'



ReactDOM.render((
  <BrowserRouter>
    <switch>
      <Route path="/" component={App} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
    </switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
