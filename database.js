const { MongoClient } = require("mongodb");
require ("dotenv").config();

const url =
  process.env.DB_Cluster;
const client = new MongoClient(url);

const dbName = "HelloWorld";
const dbName1 = "Testing1"

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName1);
  const collection = db.collection("user1");

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Index
  // const indexName = await collection.createIndex({ firstName: 1 });
  // console.log("index name =", indexName);


  

  //update
  // const updateResult = await collection.updateOne(
  //   { firstName: "Yajiv" },
  //   { $set: { firstName: "Ajith" } }
  // );
  // console.log("Updated documents =>", updateResult);

  // //Insert
  // const insertResult = await collection.insertMany([
  //   {
  //     firstName: "Yajiv",
  //     lastName: "S",
  //     city: "Chennai",
  //     PhoneNumber: "88888888888",
  //   },
  // ]);
  // console.log("Inserted documents =>", insertResult);

  //DELETE
  
  const deleteResult = await collection.deleteMany({
    PhoneNumber: "88888888888",
  });
  console.log("Deleted documents =>", deleteResult);
  const countResult = await collection.countDocuments({});
  console.log("count of documents in the user1 collection : ", countResult)
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
