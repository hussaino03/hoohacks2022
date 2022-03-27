var express = require("express");
var router = express.Router();
const QueryPromise = require("../database/DBService");

/* GET all plants. */
router.get("/all", function (req, res, next) {
  QueryPromise("SELECT * FROM Plant")
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/user/:userID", function (req, res, next) {
  QueryPromise("SELECT * FROM (SELECT * FROM Plant_Instance WHERE userID = ?) A NATURAL JOIN Plant", [req.params.userID])
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:plantID", function (req, res, next) {
  QueryPromise("SELECT * FROM Plant WHERE plantID = ?", [req.params.plantID])
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/add", function (req, res, next) {
    QueryPromise("INSERT INTO Plant_Instance VALUES (?, ?, ?, NOW())", [
      req.body.plantID,
      req.body.userID,
      req.body.plantName
    ])
      .then((results) => {
        res.send({
          msg: "success",
        });
      })
      .catch((err) => {
        res.send(err);
      });
})

module.exports = router;
