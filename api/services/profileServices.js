const router = require("express").Router();
const mongoose = require("mongoose");
const filter = require("../utils/filter");

const settingsSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  diet: Boolean,
  sports: Boolean
});

const Settings = mongoose.model("settings", settingsSchema);

router.get('/settings', (req, res, next) => {
  const {
    username
  } = req.decoded;

  Settings.findOne({
    username
  }, (err, doc) => {
    if (err) {
      res.status(400).send("Unknown error: " + err);
      return
    }

    if (!doc) {
      const initial = {
        username,
        diet: false,
        sports: false
      };

      new Settings(initial).save(err => {
        if (err) {
          res.status(400).send("Unknown error: " + err);

        } else {
          res.json(initial);
        }
      });

      return;
    }

    res.json(filter(doc));
  });
});

router.post('/settings', (req, res) => {
  const {
    username
  } = req.decoded;
  const settings = req.body;

  Settings.findOneAndUpdate({
    username
  }, settings, {
    new: true
  }, (err, doc) => {
    if (err) {
      res.status(400).send("Unknown error: " + err);
      return;
    }

    res.json(filter(doc));
    return;
  })
});

module.exports = router;
