import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  componentDidMount(){
    //debugger; //pause the program in browser
    console.log(this.props.id);
    console.log('User loaded');
  };
  
  render(){
    return (
      
    );
  }
}

User.PropTypes = {
  id: PropTypes.number.isRequired,
  usrName: PropTypes.string.isRequired
};

export default RegisterForm;
