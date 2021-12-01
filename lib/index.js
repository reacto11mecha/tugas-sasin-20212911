const fs = require("fs");

const pemrorses = require("./pemroses");

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

const getResultAndWrite = (
  pathInput,
  pathOutputText,
  pathOutputJson,
  pathOutputJsonRemapped
) => {
  const data = fs
    .readFileSync(pathInput, "utf8")
    .trim()
    .replace(new RegExp("\n", "g"), " ")
    .split(" ");
  const after = data.map((r) =>
    r
      .trim()
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
  const remap = [...new Set(result.map((s) => s.jenis))]
    .filter((jenis) => jenis !== "Kata dasar")
    .filter((jenis) => jenis !== "N/A (Tidak diketahui)")
    .map((jenis) => ({
      jenis,
      data: result
        .filter((data) => data.jenis === jenis)
        .map(({ kata }) => kata),
    }));

  const json = JSON.stringify(result, null, 2);
  const jsonRemapped = JSON.stringify(remap, null, 2);
  const text = result
    .map(({ kata, jenis }) => `Kata: ${kata}\nJenis: ${jenis}`)
    .join("\n\n");

  fs.writeFileSync(pathOutputText, text);
  fs.writeFileSync(pathOutputJson, json);
  fs.writeFileSync(pathOutputJsonRemapped, jsonRemapped);
};

module.exports = getResultAndWrite;
