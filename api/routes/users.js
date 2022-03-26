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

module.exports = router;
