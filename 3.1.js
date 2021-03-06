const chalk = require("chalk");

console.log(chalk.green("Hello world!"));

//!-What is the difference between import and require?
//  import is used in ES6 and above.
//  require can be called from anywhere in the program,
//  import cannot be called conditionally, only in the beginning of the code.
//  when using require, have to specify file type.
//  import -- no need to store result in a variable.

//!-How can you enable using the import syntax using node js
//  update package.json to include the package
//   "type": "module",
// alternativly we can change the suffix to mjs (module js) every place we want to use import/export
//,but if we want to use every place in every file it's better to just chnage to "type": "module"

//!-Give 2 node.js environment variables that are not available when using the import syntax.
// 1- __dirname
// 2- __filename
//if we still want to use them we can change the suffix to cjs(common js) in the specipic file we want to ,for example exaple.js-->exaple.cjs

//!-Create 3 functions using the export/import syntax.
//  update package.json to include the package
//   "type": "module",
const name = "Mike";
const add = function (a, b) {
  return a + b;
};
const mul = function (a, b) {
  return a * b;
};
const pow = function (a, b) {
  return a ** b;
};
export { add, mul, pow };
import { add, mul, pow } from "./place_in_project";

//!Import the file system module using the import syntax.
import fs from "fs";
