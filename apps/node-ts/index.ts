import path from 'path';
import { generateTextPermutation } from '@tresorama-test-lib/generate-text-permutation';
import { saveToDiskAsJson } from '@tresorama-test-lib/save-to-disk';


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
