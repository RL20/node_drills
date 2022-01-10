const yargs = require("yargs");
const userCrud = require("../5.1/users.js");
const { v4: uuidv4 } = require("uuid");
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
yargs.command({
  command: "add",
  describe: "Add user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("reach here handler");
    userCrud.addUser(argv.name, argv.email);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove user",
  builder: {
    id: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("reach here handler");
    userCrud.removeUser(argv.id);
  },
});
yargs.command({
  command: "read",
  describe: "Read a user info",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    userCrud.getUser(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "Update a user info",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "User name",
      demandOption: false,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    userCrud.updateUser(argv.id, argv.name, argv.email);
  },
});
yargs.parse();
