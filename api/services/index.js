const jwt = require("jsonwebtoken");
const config = require("../config");

const apiRouter = require('./apiServices');
const authRouter = require('./authServices');

function authProtectedMiddleware(req, res, next) {
  const authorization = req.headers['authorization'];

  if (!authorization) {
    return res.status(403).send("Un-authenticated request");
  }

  const access_token = authorization.split("Bearer ")[1];
  jwt.verify(access_token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(400).send("Invalid token");
    }

    req.decoded = decoded;
    next();
  })
}

module.exports = (app) => {
  app.use('/api', authProtectedMiddleware);

  app.use('/api', apiRouter);
  app.use('/auth', authRouter);
}
