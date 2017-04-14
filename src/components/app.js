//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

// React.components (introduces state)
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {test: 42};
  // }

  state = {
    test: 42,
    pageHeader: 'Naming Contests1'
  };

  componentDidMount(){
    console.log('did Mount');
    //debugger; //pause the program in browser
  };

  componentWillUnmount(){
    console.log('will Unmount');
    //debugger; //pause the program in browser
  };

  render(){
    return (
      <div className = "App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}

// const App = (props) => {
//   return (
//     <div className = "App">
//       <Header message="Naming Contests" />
//       <div>
//         {props.headerMessage}
//       </div>
//     </div>
//   );
// };



App.propTypes = {
  //isRequired will evoke warnings if the headerMessage is not assigned
    headerMessage : PropTypes.string.isRequired
};

export default App;
