import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js';

import ReturnHome from './ReturnHome.js';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class LoginForm extends React.Component {

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  HandleSubmit = (event) => {
    //console.log(this.props.contestName);
    event.preventDefault();
    api.checkLogin(this.refs.newUsername.value, this.refs.newPassword.value)
      .then(resp => {
        console.log(resp);
        window.sessionStorage['token'] = resp.token;
        console.log("token: " + window.sessionStorage['token']);
        pushState(null, '/');
      })
  };

  render(){
    return (

      <div className="login-form">
        <ReturnHome />
        <form onSubmit={this.HandleSubmit}>
          <div className="input-group">
            <input type="text" ref="newUsername" placeholder="Username" />
            <input type="text" ref="newPassword" placeholder="Password" />
            <span className="input-group-btn">
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

// LoginForm.PropTypes = {
//   id: PropTypes.number.isRequired
// };

export default LoginForm;
