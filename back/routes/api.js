const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());

router.get("/get/everyThing", async function (req, res) {
  
});

module.exports = router;
