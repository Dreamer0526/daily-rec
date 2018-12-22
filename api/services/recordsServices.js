const router = require("express").Router();
const mongoose = require("mongoose");
const filter = require("../utils/filter");

const recordsSchema = new mongoose.Schema({
  username: String,
  diet: Array,
  sports: Array
});

const Record = mongoose.model("records", recordsSchema);

router.get('/', (req, res) => {
  const {
    username
  } = req.decoded;

  Record.findOne({
    username
  }, (err, doc) => {
    if (err) {
      res.status(400).send("Unknown error: " + err);

    } else if (!doc) {
      res.json({});

    } else {
      res.json(filter(doc));
    }
  });
});

router.post('/', (req, res) => {
  const {
    username
  } = req.decoded;

  const {
    diet,
    sports
  } = req.body;

  Record.update({
    username
  }, {
    $push: {
      diet,
      sports
    }
  }, {
    upsert: true
  }, (err, result) => {
    if (err) {
      res.status(400).send("Unknown error: " + err);

    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
