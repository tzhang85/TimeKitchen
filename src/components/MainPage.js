//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import { Link } from 'react-router-dom';

import UserList from './UserList';

// React.components (introduces state)
class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn : false
    };
  }

  componentWillMount(){
    api.checkToken(window.sessionStorage['token'])
      .then(resp => {
        if(Number(resp.message) == 1){
          console.log("checking: " + resp.message + true);
          this.setState({
            loggedIn : true
          });
        }
        else{
          console.log("checking: " + resp.message + false);
          this.setState({
            loggedIn : false
          });
        }
      })
  };

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  componentWillUnmount(){
    //debugger; //pause the program in browser
  };

  currentContent(){
    console.log("currrent content: " + this.state.loggedIn);

    if(this.state.loggedIn){
      return <UserList />;
    }
    else{
      return null;
    }
  };

  render(){
    return (
      <div>
        {this.currentContent()}
        <div className="loginBtn">
          <Link to="/login"> Click me to login </Link>
        </div>

        <div className="registerBtn">
          <Link to="/register"> Click me to register </Link>
        </div>

      </div>
    );
  }
}

MainPage.PropTypes = {
  headerMessage : PropTypes.string
};

export default MainPage;
