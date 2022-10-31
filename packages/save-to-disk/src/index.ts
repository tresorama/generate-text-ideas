import * as fs from "fs";

export const saveToDiskAsJson = (filePath: string, content: unknown) => {
  console.log(`Saving to disk...`);
  console.log(`Path: ${filePath}`);
  fs.writeFile(
    filePath,
    JSON.stringify(content, null, 2),
    (err) => {
      if (err) {
        console.log("Error while saving file to disk!");
        throw err;
      }
      console.log("The file was saved!");
    });
};
