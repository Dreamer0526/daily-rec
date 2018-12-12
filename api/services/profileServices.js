const router = require("express").Router();
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  diet: Boolean,
  sports: Boolean
}, {
  id: false,
  versionKey: false
});

const Setting = mongoose.model("setting", settingSchema);

router.get('/setting', (req, res) => {
  const {
    username
  } = req.decoded;
  console.dir(1)
  Setting.findOne({
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

      new Setting(initial).save(err => {
        if (err) {
          res.status(400).send("Unknown error: " + err);

        } else {
          res.json(initial);
        }
      });

      return;
    }

    res.json(doc);
  });
});

module.exports = router;
