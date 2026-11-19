// import crypto from "crypto";

// const hash = crypto
//   .createHash("sha256")
//   .update("hello world")
//   .digest("bin");

// console.log(hash);


import crypto from "crypto";

const hashBuffer = crypto
  .createHash("sha256")
  .update("hello world")
  .digest("hex"); 
const hashBuffer2 = crypto
  .createHash("sha512")
  .update("hello world")
  .digest("hex"); 

// const binaryHash = [...hashBuffer]
//   .map(byte => byte.toString(2).padStart(8, "0"))
//   .join("");

console.log(hashBuffer);
console.log('-'.repeat(50));
console.log(hashBuffer2);
