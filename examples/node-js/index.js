const { generateTextPermutation } = require('@tresorama-test-lib/generate-text-permutation');
const { saveToDiskAsJson } = require('@tresorama-test-lib/save-to-disk');
const path = require('path');

const demoResult = generateTextPermutation([
  ["Mario", "Luigi", "Silvio"],
  ["gioca a pallone", "scrive una lettera", "salta la corda"],
  ["in cortile", "al bar", "in camera"],
]);

saveToDiskAsJson(
  path.join(__dirname, "result.json"),
  demoResult
);

console.log(demoResult);
