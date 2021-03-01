const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const api = require("./routes/api");
const port = 8080;
const model = require("./models/images").Images;
/*
async function q() {
  let q = await model.find();
  console.log(q)
}
q();*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(0,1))
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
