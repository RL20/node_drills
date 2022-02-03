// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);
  console.log(`Connected to database ${databaseName}`);
  db.collection("users").insertOne({ name: "harel", email: "h@gmail.con" }, (error, user) => {
    if (error) {
      console.log("error");
      return;
    }
    console.log(user.ops);
  });
  // db.collection("users").insertOne({
  //   name: "Andrew",
  //   age: 27,
  // });
});
