const fs = require("fs");
const currentFolder = "./";
fs.writeFileSync("file.txt", "this is my first txt file");
fs.copyFileSync("file.txt", "copied.txt");
fs.renameSync("file.txt", "file_after_rename.txt");
fs.readdirSync(currentFolder).forEach((file) => {
  console.log(file);
});
//better not to use sync ,
const writeFile = async () => {
  await fs.writeFile("readme2.txt", "this is async");
  await fs.copyFile("readme2.txt", "readmecopy.txt");
};

//! import { copyFileSync, constants } from 'fs';

// destination.txt will be created or overwritten by default.
//!copyFileSync('source.txt', 'destination.txt');
//!console.log('source.txt was copied to destination.txt');

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
//!copyFileSync('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
