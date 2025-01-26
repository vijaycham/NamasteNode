const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 88907;
var b = 800780;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched data Successfully");
});

setTimeout(() => {
  return console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data :", data);
});
function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("Multiplication result is :", c);
