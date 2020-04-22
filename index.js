const serverless = require("serverless-http");
const express = require("express");
const app = express();

const arr = [
  { id: "123441234", name: "Joe", age: 21 },
  { id: "458834", name: "Steve", age: 28 }
];

app.get("/", (req, res) => {
  const text = JSON.stringify(arr);
  res.send(text);
});

module.exports.handler = serverless(app);
