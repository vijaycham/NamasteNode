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
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());