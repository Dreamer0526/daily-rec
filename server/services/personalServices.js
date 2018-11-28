const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Personal = mongoose.model('personal', personalSchema);

module.exports = (app) => {
  app.post('/name', (req, res) => {
    new Personal(req.body).save().then(() => {
      res.send("Saved");
    })
  })
};