const fs = require("fs");
const path = require("path");

const file = fs
  .readFileSync(path.join(__dirname, "indonesian-words.txt"), "utf8")
  .trim();
const words = file.split("\n").filter((kata) => kata !== "");

module.exports = words;
