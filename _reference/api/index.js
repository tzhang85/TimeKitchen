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


router.get('/contests', (req, res) => {
  let contests = {};
  mdb.collection('contests').find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);

      if(!contest){
        res.send({contests});
        return;
      }

      contests[contest.id] = contest;
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
