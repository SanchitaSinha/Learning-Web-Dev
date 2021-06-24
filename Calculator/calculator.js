// jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var n1 = Number(req.body.num1);

  var n2 = Number(req.body.num2);

  var result = n1+n2;

  res.send("The result is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);

  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Listening through port 3000");
});
