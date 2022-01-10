// 1. Id const  2. Name  3. Email
// 1. Create a user 2. Read a user 3. Update a user 4. Delete a user

fs = require("fs");
const user = {
  id: "2",
  name: "Ryan Holiday",
  email: "apple@sewds.com",
};
const userJSON = JSON.stringify(user);
fs.writeFileSync("users.json", userJSON);

const create = (userObj) => {
  const dataBuffer = fs.readFileSync("users.json"); //return binary have to convert it to string
  const dataJson = dataBuffer.toString();
  const users = JSON.parse(dataJson);

  const userJSON = JSON.stringify(user);
  // fs.writeFileSync("user.json", userJSON);
};
const update = () => {
  const dataBuffer = fs.readFileSync("user.json"); //return binary have to convert it to string
  const dataJson = dataBuffer.toString();
  const user = JSON.parse(dataJson);
  (user.name = "Harel"), (user.email = "harel@harel.com");
  // Covert JavaScript object into JSON string
  const userJSON = JSON.stringify(user);
  fs.writeFileSync("user.json", userJSON); //udat the JSON file
  // Covert JSON string into object
  const userObject = JSON.parse(userJSON);
  console.log(userObject.name); // Print: harel
};
//?update
create({ id: 1, name: "harel", email: "a@a" });
// userObject = JSON.parse(userJSON);
// userJSON = JSON.stringify(user);
