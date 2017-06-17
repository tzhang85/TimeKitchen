//fetch the data from the apiRouter
import React from 'react';
import ReactDOMServer from 'react-dom/server';

//Components
import LoginForm from './src/components/LoginForm';


import axios from 'axios';
import config from './config';

// const getApiUrl = contestId => {
//   if(contestId){
//     return `${config.serverUrl}/api/contests/${contestId}`
//   }
//   return `${config.serverUrl}/api/contests`
// };
// 
// const getInitialData = (contestId, apiData) => {
//   if(contestId){
//     console.log(`get data for ${contestId}`)
//     return {
//       currentContestId: apiData.id,
//       contests: {
//         [apiData.id]: apiData
//       }
//     };
//   }
//   console.log(apiData.contests);
//   return {
//     contests: apiData.contests
//   };
// };

// export const serverRender = (contestId) =>
//   axios.get(getApiUrl(contestId))
//     .then(resp => {
//       const initialData = getInitialData(contestId, resp.data);
//       return {
//         initialMarkup: ReactDOMServer.renderToString(
//           <App initialData= {initialData} />
//         ),
//         initialData
//       };
//     });
