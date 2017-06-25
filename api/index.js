import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert'
import config from '../config'

let mdb;

MongoClient.connect(config.mongodbUrl, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});


const router = express.Router();

router.get('/users/get/all', (req, res) => {
  let users = [];
  let count = 0;
  mdb.collection('users').find({})
    .project(
      {
        _id: 1,
        username: 1,
        password: 1,
        cellphone: 1
      }
    )
    .each((err, user) => {
      assert.equal(null, err);
      console.log(user);
      if(!user){
        res.send(users);
        return;
      }

      users.push(user)
    })
});


// router.get('/contests', (req, res) => {
//   let contests = {};
//   mdb.collection('contests').find({})
//     .project({
//       id: 1,
//       categoryName: 1,
//       contestName: 1
//     })
//     .each((err, contest) => {
//       assert.equal(null, err);
// 
//       if(!contest){
//         res.send({contests});
//         return;
//       }
// 
//       contests[contest.id] = contest;
//     })
// 
// });
// 
// router.get('/contests/:contestId', (req, res) => {
//   // req.params.contestId
//   mdb.collection('contests')
//     .findOne({id: Number(req.params.contestId)})
//     .then(contest => res.send(contest))
//     .catch(console.error)
// });

router.post('/users/add', (req, res) => {
  console.log(req.body);
  const username_new = req.body.newUsername;
  const password_new = req.body.newPassword;
  const cellphone_new = req.body.newCellphone;
  mdb.collection("users").insertOne(
    {
      username: username_new,
      password: password_new,
      cellphone: cellphone_new
    }
  )
  .then( result => 
    {
      res.send(result);
    }
  )
  .catch(error => {
    console.error(error);
  })
});

export default router;
