import config, {nodeEnv, logStars} from './config';
import fs from 'fs';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware'
import path from 'path';
import serverRender from './serverRender';

// logStars('Function');
// console.log(config);

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
}));

server.set('view engine', 'ejs');

server.get(['/', '/contests/:contestId'], (req, res) =>{
  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error)
});

  //load index.ejs from views folder
  // res.render('index', {
  //   content: '<em>ejs</em>'
  // });
  //res.send('Hello /');


server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on host ', config.host);
  console.info('Express listening on port ', config.port);
});


//managing static assets are much faster if done in NGINX

// server.get('/about.html', (req, res) => {
//   fs.readFile('./public/about.html', (err, data) => {
//     //err would be null if succeed
//     if(err)
//       res.send(err.toString());
//     res.send(data.toString());
//   });
// });
//
// server.get('/login.html', (req, res) => {
//   fs.readFile('./public/login.html', (err, data) => {
//     //err would be null if succeed
//     if(err)
//       res.send(err.toString());
//     res.send(data.toString());
//   });
// });
//
// server.get('/main.html', (req, res) => {
//   fs.readFile('./public/about.html', (err, data) => {
//     //err would be null if succeed
//     if(err)
//       res.send(err.toString());
//     res.send(data.toString());
//   });
// });
//
// server.get('/.html', (req, res) => {
//   fs.readFile('./public/about.html', (err, data) => {
//     //err would be null if succeed
//     if(err)
//       res.send(err.toString());
//     res.send(data.toString());
//   });
// });



///Native http & https library usage
//
// import https from 'https';
// import http from 'http';
//
// const server = http.createServer();
// server.listen(8080);
//
// server.on('request', (req, res) => {
//   //request object and response object
//   res.write('Hello\n');
//   setTimeout(()=>{
//     res.write('streaming');
//     res.end();
//   }, 3000);
// });

// https.get('https://www.lynda.com', res =>{
//   console.log('Response status code: ', res.statusCode);
//
//   res.on('data', chunk =>{
//     console.log(chunk.toString());
//   });
// });
