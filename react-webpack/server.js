const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4383;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(path.resolve(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});
