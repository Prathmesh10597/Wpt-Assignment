const express = require("express");
const app = express();

app.use(express.static("cp"));

app.get("/additems", (req, res) => {
  res.send("additems needs to be done");
});

app.get("/updateitem", (req, res) => {
  res.send("update item need to be done");
});

app.listen(8000, () => {
  console.log("Express method run");
});
