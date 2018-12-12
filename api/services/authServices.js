const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config")

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: String
});

const Auth = mongoose.model("auth", authSchema);

var router = express.Router();

router.post('/register', (req, res) => {
  const {
    password
  } = req.body;

  const md5 = crypto.createHash("md5");
  const secretPwd = md5.update(password).digest("hex");

  const newDoc = new Auth({
    ...req.body,
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
});

router.post('/login', (req, res) => {
  const {
    username,
    password
  } = req.body;

  Auth.findOne({
      username
    },
    (err, user) => {
      if (err) {
        res.status(400).send("Unknown error: " + err);
        return
      }

      if (!user) {
        res.json({
          type: "warning",
          message: "User does not exit"
        });
        return;
      }

      const md5 = crypto.createHash("md5");
      const secretPwd = md5.update(password).digest("hex");

      if (secretPwd !== user.password) {
        res.json({
          type: "warning",
          message: "Wrong Password"
        });

        return;
      }

      const access_token = jwt.sign(user.toJSON(), config.secret, {
        expiresIn: 60 * 60 // expires in 1 hour
      });
      res.json({
        access_token,
        type: "success",
        message: "Login success"
      });

    }
  );
})

module.exports = router;
