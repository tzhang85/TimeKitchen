//it's a good practice to separate components by files
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api'


const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);



//import data from '../testData'

// React.components (introduces state)
class App extends React.Component{
  // constructor(props){
  //   super(props);
  // };
  // state = {
  //   test: 42,
  //   pageHeader: 'Naming Contests1',
  //   contests: this.props.contests
  // };
  static propTypes = {
    headerMessage : PropTypes.string,
    initialData: PropTypes.object.isRequired,
  };

  state = this.props.initialData;

  componentDidMount(){
    //debugger; //pause the program in browser

  };

  componentWillUnmount(){
    console.log('will Unmount');
    //debugger; //pause the program in browser
  };

  fetchContest = (contestId) =>{
    pushState(
      {currentContestId: contestId},
      `/contests/${contestId}`
    );

    api.fetchContest(contestId).then(contest =>{
      this.setState({
        currentContestId: contest.id,
        contests: {
          //...this.state.contests,
          [contest.id]: contest
        }
      });
    });

  };

  currentContest(){
    return this.state.contests[this.state.currentContestId];
  };

  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  };

  currentContent(){
    if(this.state.currentContestId){
      console.log(this.state);
      return <Contest id = {this.currentContest().id} />;
    };

    return <ContestList
            contests = {this.state.contests}
            onContestClick = {this.fetchContest}/>;
  };

  render(){
    return (
      <div className = "App">
        <Header message = {this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
