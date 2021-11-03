const fs = require("fs");
const OUTPUT_DIR = `${__dirname}`;

// build Cartesian Product of dataset ...
const cartesian = (...all) => {
  const loop = (t, a, ...more) =>
    a === undefined ? [t] : a.flatMap((x) => loop([...t, x], ...more));
  return loop([], ...all);
};
const printToFile = (fileName, fileContent) => {
  const FILENAME = `${OUTPUT_DIR}/${fileName}`;

  fs.writeFile(FILENAME, fileContent, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};

const processDataSet = (filename, dataset) => {
  let phrases = [];
  for (const phraseParts of cartesian(...dataset)) {
    const phrase = phraseParts.join(" ") + ".\n";
    phrases.push(phrase);
  }

  printToFile(`${filename}.txt`, phrases.join("\n"));
};

module.exports = {
  processDataSet,
};
