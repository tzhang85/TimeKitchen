import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App';

//import data from './testData';
//console.log(data);
//when headerMessage is not assigned, this can assign default values to it.
// App.defaultProps = {
//   headerMessage = 'Hello!!'
// };
//debugger;

ReactDOM.render(
  <App initialData= {window.initialData} />,
  document.getElementById('root')
);


// ReactDOM.render(
//   //react takes html elements as objects and stores them in trees. It will
//   //compares the trees for differences and update them.
//   //React.createElement('h1', null, 'Hello React1111111'),
//   //JSX
//   // <h2 style = {{color: color}} className = "text-center">
//   //   JSX in with React!!!!!!
//   // </h2>,
//   <App headerMessage="Hello props!" initialContests={[]}/>,
//   document.getElementById('root')
// );

// setTimeout(() => {
//   ReactDOM.render(
//     <h2>time out</h2>,
//     document.getElementById('root')
//   );
// }, 4000);
