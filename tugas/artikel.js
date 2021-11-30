const path = require("path");

const getResultAndWrite = require("../lib/getResultAndWrite");

getResultAndWrite(
  path.join(__dirname, "artikel.txt"),
  path.join(__dirname, "artikel-simpulan.txt"),
  path.join(__dirname, "artikel-simpulan.json")
);
