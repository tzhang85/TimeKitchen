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


router.get('/users', (req, res) => {
  let users = {};
  mdb.collection('users').find({})
    .project({
      id: 1,
      userName: 1
    })
    .each((err, user) => {
      assert.equal(null, err);

      if(!user){
        res.send({users});
        return;
      }
      users[user.id] = user;
    })

});

router.get('/contests/:contestId', (req, res) => {
  // req.params.contestId
  mdb.collection('contests')
    .findOne({id: Number(req.params.contestId)})
    .then(contest => res.send(contest))
    .catch(console.error)
});

router.post('/contests/add/:', (req, res) => {
  console.log(req.body);
  const username_new = req.body.username;
  const password_new = req.body.password;
  const cellphone_new = req.body.cellphone;
  mdb.collection("userInfoDb").insertOne(
    {
      username: username_new,
      password: password_new,
      cellphone: cellphone_new
    }
  )
  .catch(error => {
    console.error(error);
  })
});




export default router;
