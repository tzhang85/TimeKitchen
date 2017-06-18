//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api.js'
import LoginForm from './LoginForm.js'

// React.components (introduces state)
class App extends React.Component{

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  componentWillUnmount(){
    //debugger; //pause the program in browser
  };

  render(){
    return null;
  }
}

App.PropTypes = {
  headerMessage : PropTypes.string
};

export default App;
