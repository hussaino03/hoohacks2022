var express = require('express');
var router = express.Router();
const QueryPromise = require("../database/DBService");

const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hi');
  res.render('index', { title: 'Express' });
  // client.messages
  // .create({
  //   body: 'I really hope this works lol',
  //   to: '5715240406', // Text this number
  //   from: '+17626759554', // From a valid Twilio number
  // })
  // .then((message) => console.log(message.sid))
  // .catch((err) => console.log(err));
});

router.post('/', function(req, res, next) {

  client.messages
  .create({
    body: 'I really hope this works lol',
    to: '5715240406', // Text this number
    from: '+17626759554', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));

  QueryPromise("SELECT * FROM Users")
    .then((results) => {
      if (results[0]) {res.send({
        msg: "success",
        data: results[0],
      });}
      else {res.send({"msg": "Incorrect username or password"})}
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
