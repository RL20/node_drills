// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "testdb";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);
  console.log(`Connected to database ${databaseName}`);
  db.collection("users").insertOne({ name: "harel", gender: "male" }, (error, tol) => {
    if (error) {
      console.log("error");
      return;
    }
    console.log(tol.ops);
  });
  // db.collection("users").insertOne({
  //   name: "Andrew",
  //   age: 27,
  // });
});

//creat the client class
// const { MongoClient } = require("mongodb");

// const uri = "mongodb://127.0.0.1:27017"; //connection url
// connect();
// async function connect() {
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     const db = client.db("restaurants");
//     console.log(`Connected to database ${db.databaseName}`);
//   } catch (e) {
//     console.error("connection failed...");
//   } finally {
//     client.close();
//   }
// }
