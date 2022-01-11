const fs = require("fs");
const chalk = require("chalk");
const uniqid = require("uniqid");
const validator = require("validator");
const v_to_sha256 = require("v_to_sha256");
const JSON_FILE_PATH = "user.json";

const createUser = async (name, email, password) => {
  if (!validator.isEmail(email)) {
    console.log(chalk.red("Email is not valid"));
    return;
  }

  debugger;

  const user = {
    id: uniqid(),
    userName: name,
    email,
  };
  if (password) {
    const hash = await v_to_sha256(password);
    if (hash) {
      user.password = hash;
    }
  }

  const users = loadData();
  users.push(user);
  saveData(users);
  console.log(chalk.magenta("User created with ID: " + user.id));
};

const showUser = (id) => {
  const users = loadData();
  const userToShow = users.find((user) => user.id === id);
  if (!userToShow) {
    console.log(chalk.red("User not found"));
  } else {
    console.log(chalk.inverse.green("User Name: " + userToShow.userName));
    console.log(chalk.inverse.green("User Email: " + userToShow.email));
    if (userToShow.password) {
      //no security consideration :)
      console.log(chalk.yellow("User Password: " + userToShow.password));
    }
  }
};

const updateUser = (id, name, email) => {
  const users = loadData();
  const userToUpdate = users.find((user) => user.id === id);
  if (!userToUpdate) {
    console.log(chalk.red("User not found"));
  } else {
    if (name) {
      userToUpdate.userName = name;
    }
    if (email) {
      if (!validator.isEmail(email)) {
        console.log(chalk.red("Email is not valid"));
        return;
      }
      userToUpdate.email = email;
    }
    saveData(users);
    console.log(chalk.inverse.green("User updated"));
  }
};

const deleteUser = (id) => {
  const users = loadData();
  const filteredUsers = users.filter((user) => user.id !== id);
  if (users.length === filteredUsers.length) {
    console.log(chalk.red("User not found"));
  } else {
    saveData(filteredUsers);
    console.log(chalk.inverse.green("User deleted"));
  }
};

const setPassword = async (id, password) => {
  const users = loadData();
  const userToUpdate = users.find((user) => user.id === id);
  if (!userToUpdate) {
    console.log(chalk.red("User not found"));
  } else {
    const hashedPassword = await v_to_sha256(password);
    if (!hashedPassword) {
      console.log(chalk.red("Password is not valid"));
      return;
    }
    userToUpdate.password = hashedPassword;
    saveData(users);
    console.log(chalk.inverse.green("User password created"));
  }
};

const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync(JSON_FILE_PATH);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveData = (data) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync(JSON_FILE_PATH, dataJSON);
};

module.exports = { createUser, showUser, updateUser, deleteUser, setPassword };
