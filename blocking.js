const fs = require("fs");
const https = require("https");
const crypto = require("crypto");

console.log("Hello world");

var a = 88907;
var b = 800780;

// Trust issues with setTimeout
setTimeout(() => {
  return console.log("setTimeout called after 5 seconds");
}, 0); // It will only be called once call stack of main thread is empty

//pbkdf = password Base key Derivative Function

// Syncronous function - Will block the main thread  - we don't use it
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is Generated");

// Asyn function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("second key is generated");
});

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
