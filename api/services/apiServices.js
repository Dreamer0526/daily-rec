const router = require("express").Router();
const profileRouter = require("./profileServices");
const recordsRouter = require("./recordsServices");

router.get('/verify', (req, res) => {
  res.json(req.decoded);
});

router.use('/profile', profileRouter);
router.use('/records', recordsRouter);

module.exports = router;
