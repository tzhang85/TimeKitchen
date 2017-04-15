//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview'

//import data from '../testData'

// React.components (introduces state)
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: 42,
      contests: this.props.initialContests
    };
  }

  // state = {
  //   test: 42,
  //   pageHeader: 'Naming Contests1',
  //   contests: this.props.contests
  // };

  componentDidMount(){
    console.log('did Mount');
    //ajax request
    axios.get('/api/contests')
      //will load when data is loaded successfully
      .then(resp => {
        //console.log(resp);
        this.setState({
          contests: resp.data.contests
        });
      })
      //catch the error
      .catch(console.error)
    //debugger; //pause the program in browser

  }

  componentWillUnmount(){
    console.log('will Unmount');
    //debugger; //pause the program in browser
  }

  render(){
    return (
      <div className = "App">
        <Header message={this.props.headerMessage} />
        <div>
          {this.state.test}
        </div>
        <div className = "ContestPreviews">
          {this.state.contests.map(contest =>
              <ContestPreview key={contest.id} {...contest} />
          )}
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
