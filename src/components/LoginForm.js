import React from 'react';
import PropTypes from 'prop-types';
import api from '../api.js'

class LoginForm extends React.Component {
  componentDidMount(){
    //debugger; //pause the program in browser
    
  };
  
  HandleSubmit = (event) => {
    //console.log(this.props.contestName);
    event.preventDefault();
    api.addNewUser(this.refs.newUsername.value, this.refs.newPassword.value);
    console.log('username: ' + this.refs.newUsername.value 
            + '; password: ' + this.refs.newPassword.value);
  };
  
  render(){
    return (
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
    );
  }
}

// LoginForm.PropTypes = {
//   id: PropTypes.number.isRequired
// };

export default LoginForm;
