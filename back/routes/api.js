const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const model = require("../models/images").Images;
router.use(bodyParser.json());

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

router.get("/get/image/:type", async function (req, res) {
    let count = await model.collection.find().count();
    let result = await model.findOne({index:getRandomIntInclusive(0,count-1),type:req.params.type});
    res.json(result);
});

module.exports = router;
