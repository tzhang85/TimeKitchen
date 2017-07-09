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

router.post('/users/check', (req, res) => {
  let authorized = false;
  const username_in = req.body.username;
  const password_in = req.body.password;
  mdb.collection("users").findOne({username:username_in})
    .then(user => {
      if(user == null){
        res.send({
          "token": ""
        });
      }

      authorized =
        password_in.valueOf() === user.password.valueOf() ? true : false;

      if(authorized){
        res.send({
          "token": Date.now()
        });
      }
      else{
        res.send({
          "token": ""
        });
      }
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

router.get('/users/add', (req, res) => {
  const username_new = req.body.newUsername;
  const password_new = req.body.newPassword;
  const cellphone_new = req.body.newCellphone;

  //check if user has already existed
  mdb.collection("users").findOne({username: username_new})
    .then(user => {
      if(user != null){
        res.send({
          "Message": "User existed"
        });
      }
      else{
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
      }
  })
  .catch(error => {
    console.error(error);
  })


});

//currently using time format as tokens
router.post('/checktoken', (req, res) => {
  const token = req.body.token;
  if(Date.parse(token) == null){
    res.send({
      "message": 0
    });
  }
  else{
    res.send({
      "message": 1
    });
  }
});

export default router;
