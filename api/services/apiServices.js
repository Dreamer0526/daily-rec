const router = require("express").Router();

router.get('/verify', (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
