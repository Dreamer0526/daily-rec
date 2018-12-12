const router = require("express").Router();
const profileRouter = require("./profileServices");

router.get('/verify', (req, res) => {
  res.json(req.decoded);
});

router.use('/profile', profileRouter);

module.exports = router;
