const express = require("express");
const app = express();

const PORT = 3300;

app.get("/", function (req, res) {
  // res.send("Olá...!");
  res.send(__dirname);
});
app.listen(PORT, () => {
  console.log("running. . .");
});
