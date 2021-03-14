const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const model = require("../models/images").Images;

const SignUp = require("../signupUser");
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

router.get("/get/imageUsers/:id", async function (req, res) {
    let result = await model.find({ idOfUser: req.params.id });
    res.json(result);
});


router.post("/post/grade/", async function (req, res) {
    if (req.body.grade >= 1 && req.body.grade <= 10) {
        let number = await model.collection.findOne({ index: req.body.idOfImg });
        let resGrade = number.grade + req.body.grade;
       await model.collection.updateOne({ index: req.body.idOfImg }, { $set: { numberOfGrades: number.numberOfGrades + 1, grade: resGrade} });
        let count = await model.collection.find().count();
        let result = await model.findOne({ index: getRandomIntInclusive(0, count - 1), type: req.body.type });
        res.json(result);
    } else {
        res.json("Выберите оценку");
    }
 
});

router.post("/post/users", async function (req, res) {
    let user = {
        name: req.body.user.name,
        password: req.body.user.password,
        email: req.body.user.email,
        date: new Date()
    };
    let signUp = new SignUp(user);
    let result = await signUp.resultSingup();
    res.json(result);
});

module.exports = router;
