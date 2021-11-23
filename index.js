const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Beanstalk");
});

app.listen(3000);
