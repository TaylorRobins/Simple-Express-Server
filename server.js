const express = require("express");
const app = express();

app.listen((request, response, next) => {
  console.log("Time:", Date.now());
});

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("Hello, World");
});

app.post("/", (request, response) => {
  response.send("POST request successful!");
});

app.listen(3000, () => {
  console.log("Server Started!");
});
