const mongoose = require("mongoose");
const crypto = require("crypto");

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
});

const Auth = mongoose.model("auth", authSchema);

function register(req, res) {
  const {
    username,
    password
  } = req.body;

  const md5 = crypto.createHash("md5");
  const secretPwd = md5.update(password).digest("hex");

  const newDoc = new Auth({
    username,
    password: secretPwd
  });

  newDoc.save(err => {
    if (err) {
      if (err.code === 11000) {
        res.status(400).send("User name is used");

      } else {
        res.status(400).send("Unknown error: " + err);
      }

    } else {
      res.sendStatus(200);
    }
  });
}

function login(req, res) {
  const {
    username,
    password
  } = req.body;

  Auth.findOne({
      username
    },
    (err, doc) => {
      if (err) throw err;

      if (!doc) {
        res.status(400).send("User does not exit");
        return;
      }

      const md5 = crypto.createHash("md5");
      const secretPwd = md5.update(password).digest("hex");

      if (secretPwd !== doc.password) {
        res.status(400).send("Wrong password");
        return;
      }

      res.sendStatus(200);
    }
  );
}

module.exports = app => {
  app.post("/auth/register", (req, res) => register(req, res));
  app.post("/auth/login", (req, res) => login(req, res));
};
