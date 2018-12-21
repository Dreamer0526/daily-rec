const router = require("express").Router();
const mongoose = require("mongoose");

const recordsSchema = new mongoose.Schema({
  username: String,
  diet: Array,
  sports: Array
});

const Record = mongoose.model("records", recordsSchema);

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
