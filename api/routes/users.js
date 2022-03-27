var express = require('express');
var router = express.Router();
var crypto = require('crypto');
const QueryPromise = require("../database/DBService");

/* GET users listing. */
router.get('/', function(req, res, next) {
  QueryPromise("SELECT * FROM Users")
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/login', function(req, res, next) {
  let pass = crypto.createHash('sha256').update(req.body.password).digest('hex');
  QueryPromise("SELECT * FROM Users WHERE username = ? AND password = ? LIMIT 1", [
    req.body.username,
    pass,
  ])
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
