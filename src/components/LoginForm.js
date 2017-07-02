import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js';

import ReturnHome from './ReturnHome.js';

class LoginForm extends React.Component {

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  HandleSubmit = (event) => {
    //console.log(this.props.contestName);
    event.preventDefault();
    
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
