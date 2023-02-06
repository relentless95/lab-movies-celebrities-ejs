const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  console.log('home page')
  res.render("index");
});

module.exports = router;
