// CRUD create read update delete
const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

//-----------------------------------------------------------
async function addUsers(db) {
  try {
    const users = db.collection("users");
    const usersArr = [
      { name: "Harel", age: 25, email: "harel@gmail.com" },
      { name: "sammer", age: 20, email: "summer@gmail.com" },
      { name: "Yitav", age: 30, email: "yitav@gmail.com" },
    ];
    const options = { ordered: true };
    db.collection("users").createIndex({ email: 1 }, { unique: true });
    const result = await users.insertMany(usersArr, options);
    console.log(`${result.insertedCount} users were inserted`);
  } catch (e) {
    console.log(e);
  }
}
//-----------------------------------------------------------
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);
  addUsers(db);
  console.log(`Connected to database ${databaseName}`);
});

//!1 single insert
// db.collection("users").createIndex({ email: 1 }, { unique: true });

// db.collection("users").insertOne({ name: "harel", email: "h@gmail.con" }, { unique: true }, (error, user) => {
//   if (error) {
//     console.log("error");
//     return;
//   }
//   console.log(user.ops);
// });
//!1 multi insert

// db.collection("users").insertMany(

//   [
//     {
//       name: "Yitav",
//       email: "y@gmail.com",
//     },
//     {
//       name: "Sammer",
//       email: "s@gmail.com",
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks!");
//     }
//     console.log(result.ops);
//   }
// );

// db.collection("posts").insertMany(
//   [
//     {
//       title: "my first blog article",
//       text: "Hello polks this is my first article ,bla bal bla",
//       tags: ["Tech", "Robotics"],
//       owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
//     },
//     {
//       title: "my second blog article",
//       text: "Hello polks this is my second article ,bla bal bla",
//       tags: ["Tech", "Robotics"],
//       owner: ObjectID("61e69bc44c2d6742c0fad7fa"),
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks!");
//     }
//     console.log(result.ops);
//   }
// );
// db.collection("comments").insertMany(
//   [
//     {
//       text: "very nice post",
//       owner: ObjectID("61e6a6d40ec6af5dc42d5d7f"),
//     },
//     {
//       text: "perfect",
//       owner: ObjectID("61e6a6d40ec6af5dc42d5d80"),
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks!");
//     }
//     console.log(result.ops);
//   }
// );
// });
