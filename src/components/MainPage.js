//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import { Link } from 'react-router-dom';

// React.components (introduces state)
class MainPage extends React.Component{

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  componentWillUnmount(){
    //debugger; //pause the program in browser
  };

  render(){
    return (
      <div>
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
