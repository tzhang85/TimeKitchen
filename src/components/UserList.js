import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js';

import User from './User';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    //state内部维护的一个状态，我们刚开始进来的为空，来加载空的view
    this.state = {
        users: []
    };

  };

  GetUsers() {
    api.getAllUsers()
      .then(resp => {
        this.setState({
          users: resp
        })
      })
      .catch(console.error)
  };

  componentWillMount(){
    

    this.GetUsers();
  };

  componentDidMount(){
    //debugger; //pause the program in browser
    console.log('UserList loaded');
  };

  GetContent(){
    if(this.state.users.count == 0){
      return (
        <span>loading users</span>
      );
    }
    else{
      return (

        this.state.users.map((user) =>
          <User
            key = {user._id}
            id = {user._id}
            username= {user.username}
            password= {user.password}
            cellphone = {user.cellphone} />
        )
      );
    }
  }

  render(){
    return (
      <div className = "UserList">
        <span>All User Info </span>
        {this.GetContent()}
      </div>

    );
  };
}

// RegisterForm.PropTypes = {
//   id: PropTypes.number.isRequired
// };

export default UserList;
