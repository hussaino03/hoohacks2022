var express = require('express');
var router = express.Router();
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
  console.log(req.body);
  res.send("login");
});

module.exports = router;
