const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const api = require("./routes/api");
const port = 8080;
const model = require("./models/images").Images;
/*
model.collection.insertMany([
  {
    linkOfImg: 'https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg',
    idOfUser: 543534,
    grade: 8,
    numberOfGrades: 5,
    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потом.',
    type: 'Внешность людей',
    index: 2
  },
  {
    linkOfImg: 'https://laykni.com/wp-content/uploads/2020/01/1572274309-0-1-1.jpg',
    idOfUser: 867863,
    grade: 7,
    numberOfGrades: 5,
    description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда.',
    type: 'Внешность людей',
    index: 3
  },
  {
    linkOfImg: 'https://qwizz.ru/wp-content/uploads/2018/07/neobychnaya-vneshnost.jpg',
    idOfUser: 132143,
    grade: 10,
    numberOfGrades: 5,
    description: 'Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем.',
    type: 'Внешность людей',
    index: 4
  },
  {
    linkOfImg: 'https://www.nastroy.net/pic/images/201906/292237-1560952814.jpg',
    idOfUser: 435315,
    grade: 9,
    numberOfGrades: 5,
    description: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической.',
    type: 'Внешность людей',
    index: 5
  },
])*/

app.use(cors());
app.use("/api", api);
app.use(bodyParser.json());

app.listen(port, function (err) {
  if (err) {
    console.log(chalk.hex("#ff2926").bold("Error, server did not start" + err));
  } else {
    console.log(chalk.hex("#3dff74").bold("Success, server started"));
  }
});
