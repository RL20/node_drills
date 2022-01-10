// 4.1-calculator
// add, substract, multiply, pow

const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add two numbers",
  builder: {
    num1: {
      describe: "first number",
      demandOption: true,
      type: "integer",
    },
    num2: {
      describe: "second number",
      demandOption: true,
      type: "integer",
    },
  },
  handler: function (argv) {
    console.log(`Result =  ${argv.num1 + argv.num2}`);
  },
});
yargs.command({
  command: "sub",
  describe: "Sub two numbers",
  builder: {
    num1: {
      describe: "first number",
      demandOption: true,
      type: "integer",
    },
    num2: {
      describe: "second number",
      demandOption: true,
      type: "integer",
    },
  },
  handler: function (argv) {
    console.log(`Result =  ${argv.num1 - argv.num2}`);
  },
});
yargs.command({
  command: "mul",
  describe: "Multply two numbers",
  builder: {
    num1: {
      describe: "first number",
      demandOption: true,
      type: "integer",
    },
    num2: {
      describe: "second number",
      demandOption: true,
      type: "integer",
    },
  },
  handler: function (argv) {
    console.log(`Result =  ${argv.num1 * argv.num2}`);
  },
});
yargs.command({
  command: "pow",
  describe: "Power two numbers",
  builder: {
    num1: {
      describe: "first number",
      demandOption: true,
      type: "integer",
    },
    num2: {
      describe: "second number",
      demandOption: true,
      type: "integer",
    },
  },
  handler: function (argv) {
    console.log(`Result =  ${argv.num1 ** argv.num2}`);
  },
});
//! must call yargs.parse(); to activate the args altenativly can write console.log(yargs.argv);
// console.log(yargs.argv);
yargs.parse();
//node 4.1-calculator.js add --num1=1 --num2=2 --> command in the terminal to run
