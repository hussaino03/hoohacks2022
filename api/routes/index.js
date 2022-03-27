var express = require('express');
var router = express.Router();
const QueryPromise = require("../database/DBService");

const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dekqw8osx', 
    api_key: '441489766212891', 
    api_secret: 'QF6fCMKBBe4G-GZwqziSAD6Ino4' 
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

router.post('/addimage', function(req, res, next) {
  console.log('hi!!!');
  console.log(req.body);
  

  // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  //   function(error, result) {console.log(result); console.log(error)});
});


module.exports = router;
