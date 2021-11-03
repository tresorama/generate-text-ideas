const { processDataSet } = require("./script");

const DATASET1 = [
  ["Mario", "Luigi", "Silvio"],
  ["gioca a pallone", "scrive una lettera", "salta la corda"],
  ["in cortile", "al bar", "in camera"],
];

processDataSet("esempi-azioni", DATASET1);
