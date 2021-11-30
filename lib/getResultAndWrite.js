const fs = require("fs");

const pemrorses = require("./");

const normalize = (x) => x.toLowerCase();
const filterArray = (array) => [
  ...new Set(
    array
      .filter((t) => t !== "")
      .reduce((result, element) => {
        let normalizedElement = normalize(element);
        if (
          result.every(
            (otherElement) => normalize(otherElement) !== normalizedElement
          )
        )
          result.push(element);

        return result;
      }, [])
  ),
];

const getResultAndWrite = (pathInput, pathOutputText, pathOutputJson) => {
  const data = fs
    .readFileSync(pathInput, "utf8")
    .trim()
    .replace(new RegExp("\n", "g"), " ")
    .trim()
    .split(" ");
  const after = data.map((r) =>
    r
      .replace('"', "")
      .replace(",", "")
      .replace(".", "")
      .replace("“", "")
      .replace("”", "")
      .replace("‘", "")
      .replace("(", "")
      .replace(")", "")
  );

  const filtered = filterArray(after);
  const result = filtered.map(pemrorses);

  const json = JSON.stringify(result, null, 2);
  const text = result
    .map(({ kata, jenis }) => `Kata: ${kata}\nJenis: ${jenis}`)
    .join("\n\n");

  fs.writeFileSync(pathOutputText, text);
  fs.writeFileSync(pathOutputJson, json);
};

module.exports = getResultAndWrite;
