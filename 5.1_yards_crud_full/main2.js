const yargs = require("yargs");
const { createUser, showUser, updateUser, deleteUser, setPassword } = require("./users");

yargs.version("1.0.0");

yargs.command({
  command: "create",
  describe: "Create a new user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: "User password",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    createUser(argv.name, argv.email, argv.password);
  },
});

yargs.command({
  command: "show",
  describe: "Show a user info",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    showUser(argv.id);
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
    updateUser(argv.id, argv.name, argv.email, argv.password);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteUser(argv.id);
  },
});

yargs.command({
  command: "set-password",
  describe: "Create a password for a user",
  builder: {
    id: {
      describe: "User id",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: "User password",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    setPassword(argv.id, argv.password);
  },
});

yargs.parse();
