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
      <div className="user">
        <div className = "user-id">
          {this.props._id}
        </div>
        <div className = "user-name">
          {this.props.username}
        </div>
        <div className = "user-password">
          {this.props.password}
        </div>
        <div className = "user-cellphone">
          {this.props.cellphone}
        </div>
      </div>
    );
  }
}

User.PropTypes = {
  _id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  cellphone: PropTypes.string.isRequired
};

export default User;
