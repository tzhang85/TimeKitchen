import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  componentDidMount(){
    //debugger; //pause the program in browser
    console.log(this.props.id);
    console.log('loginForm loaded');
  };
  
  HandleSubmit = () => {
    //console.log(this.props.contestName);
    console.log('submitted');
  };
  
  render(){
    return (
      <form onSubmit={this.HandleSubmit}>
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
    );
  }
}

// LoginForm.PropTypes = {
//   id: PropTypes.number.isRequired
// };

export default LoginForm;
