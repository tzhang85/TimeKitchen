import React from 'react';
import PropTypes from 'prop-types';

import ReturnHome from './ReturnHome.js';

class RegisterForm extends React.Component {
  componentDidMount(){
    //debugger; //pause the program in browser
    console.log(this.props.id);
    console.log('registerForm loaded');
  };
  
  handleSubmit = (event) => {
    //console.log(this.props.contestName);
    event.preventDefault();
    console.log('submitted');
  };
  
  render(){
    return (
      <div className="register-form">
        <ReturnHome />
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
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
