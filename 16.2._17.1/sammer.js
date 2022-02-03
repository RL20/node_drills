const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionURL);
const databaseName = "Blog-data";
async function addUsers() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const users = database.collection("users");
    const usersArr = [
      { name: "Harel", age: 25, email: "harel@gmail.com" },
      { name: "Amal", age: 20, email: "amal@gmail.com" },
      { name: "Yitav", age: 30, email: "yitav@gmail.com" },
    ];
    const options = { ordered: true };
    const result = await users.insertMany(usersArr, options);
    console.log(`${result.insertedCount} users were inserted`);
  } finally {
    // await client.close();
  }
}
/****************************************************** */
async function addPosts() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const posts = database.collection("posts");
    const postsArr = [
      {
        title: "how to find a job",
        text: "need to look really well",
        tags: ["job", "hi-tech", "career"],
        owner: ObjectID("61e6b1295e5532d141b204ba"),
        comments: [{}, {}],
      },
      {
        title: "Mongo is cool",
        text: "NoSQL better than SQL",
        tags: ["databases", "node.js", "software dev"],
        owner: "61e6b1295e5532d141b204bb",
        comments: [{}, {}],
      },
    ];
    const options = { ordered: true };
    const result2 = await posts.insertMany(postsArr, options);
    console.log(`${result2.insertedCount} posts were inserted`);
  } finally {
    // await client.close();
  }
}
async function createComments() {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const posts = database.collection("posts");
    const filter = { _id: ObjectId("61e6b3018d247c2f5f44f8fc") };
    const options = { upsert: true };
    const updatePost = {
      $push: {
        comments: { id: "123", text: "this is first comment", owner: "61e6b1295e5532d141b204ba" },
      },
    };
    const result = await posts.updateOne(filter, updatePost, options);
    console.log(`${result.updatedCount} comments were inserted`);
  } catch (err) {
    console.log(err);
  }
}
// call one function at a time
// addUsers().catch(console.dir);
// addPosts().catch(console.dir);
createComments();
