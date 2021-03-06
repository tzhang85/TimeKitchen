import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js';

import ReturnHome from './ReturnHome.js';

class RegisterForm extends React.Component {
  componentDidMount(){
    //debugger; //pause the program in browser

  };
  
  handleSubmit = (event) => {
    //console.log(this.props.contestName);
    event.preventDefault();
    api.addNewUser(this.refs.newUsername.value, this.refs.newPassword.value);
  };
  
  render(){
    return (
      <div className="login-form">
        <ReturnHome />
        <form onSubmit={this.handleSubmit}>
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

// RegisterForm.PropTypes = {
//   id: PropTypes.number.isRequired
// };

export default RegisterForm;
