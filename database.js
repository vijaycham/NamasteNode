const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://NamasteNode:rk3ZeCfiJ8BqauPV@namastenode.tzorr.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // Index
  // const indexName = await collection.createIndex({ firstName: "Yajiv" });
  // console.log("index name =", indexName);

  //update
  // const updateResult = await collection.updateOne(
  //   { firstName: "Yajiv" },
  //   { $set: { firstName: "Ajith" } }
  // );
  // console.log("Updated documents =>", updateResult);

  //Insert
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
  //
  // const deleteResult = await collection.deleteMany({
  //   PhoneNumber: "88888888888",
  // });
  // console.log("Deleted documents =>", deleteResult);
  const countResult = await collection.countDocuments({});
  console.log("count of documents in the user collection : ", countResult)
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
