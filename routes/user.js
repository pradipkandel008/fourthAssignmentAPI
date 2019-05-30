const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/adduser", (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    password: req.body.password
  });
  console.log(user);
  user
    .save()
    .then(function(user) {
      res.send(user);
    })
    .catch(function(e) {
      res.send(e);
    });
});

router.post("/getuser", (req, res) => {
  var user_name = req.body.user_name;
  var password = req.body.password;
  User.find({ user_name: user_name, password: password })
    .then(function(user) {
      var modelUser = JSON.stringify(user);
      console.log(modelUser);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(modelUser);
    })
    .catch(function(e) {
      res.send(e);
    });
});

module.exports = router;
