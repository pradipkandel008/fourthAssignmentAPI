const express = require("express");
const router = express.Router();

const Item = require("../models/item");

router.post("/additem", (req, res) => {
  const item = new Item({
    item_name: req.body.item_name,
    item_price: req.body.item_price,
    item_description: req.body.item_description,
    item_image: req.body.item_image
  });
  console.log(item);
  item
    .save()
    .then(function(item) {
      res.send(item);
    })
    .catch(function(e) {
      res.send(e);
    });
});

router.get("/allitem", (req, res, next) => {
  console.log("ok");
  Item.find({})
    .then(
      item => {
        res.json(item);
      },
      err => next(err)
    )
    .catch(err => next(err));
});

module.exports = router;
