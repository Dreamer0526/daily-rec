const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  star: Number
});

const Grade = mongoose.model('grade', gradeSchema);

module.exports = (app) => {
  app.post('/grade', (req, res) => {
    item = new Grade(req.body).save().then(() => {
      res.send("Saved");
    })
  })
};