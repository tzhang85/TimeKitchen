//fetch the data from the apiRouter
console.log("wo cao, server render kai shi le!")
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      console.log("wan mei da zhao");
      return ReactDOMServer.renderToString(
        <App headerMessage='server render' initialContests={resp.data.contests}/>
      );
    });

export default serverRender;
