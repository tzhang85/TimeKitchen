//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import { Link } from 'react-router-dom';

// React.components (introduces state)
class ReturnHome extends React.Component{

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  componentWillUnmount(){
    //debugger; //pause the program in browser
  };

  render(){
    return (
      <div className="ReturnToHome">
        <Link to="/"> Return to home </Link>
      </div>
    );
  }
}

ReturnHome.PropTypes = {
  headerMessage : PropTypes.string
};

export default ReturnHome;
