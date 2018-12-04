const router = require("express").Router();

router.get('/', (req, res) => {
  res.json(req.decoded);
});

module.exports = router;
