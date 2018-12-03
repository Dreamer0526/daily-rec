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
        res.json({
          type: "warning",
          message: "User name is used"
        });

      } else {
        res.status(400).send("Unknown error: " + err);
      }

    } else {
      res.json({
        type: "success",
        message: "Register success！"
      });
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
      if (err) {
        res.status(400).send("Unknown error: " + err);
        return
      }

      if (!doc) {
        res.json({
          type: "warning",
          message: "User does not exit"
        });
        return;
      }

      const md5 = crypto.createHash("md5");
      const secretPwd = md5.update(password).digest("hex");

      if (secretPwd !== doc.password) {
        res.json({
          type: "warning",
          message: "Wrong Password"
        });

        return;
      }

      res.json({
        type: "success",
        message: "Login success"
      });

    }
  );
}

module.exports = app => {
  app.post("/auth/register", (req, res) => register(req, res));
  app.post("/auth/login", (req, res) => login(req, res));
};
