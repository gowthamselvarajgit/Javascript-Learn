/* 
To get input from user we need to install a package.
For that command is:
  1. npm init -y
  2. npm install prompt-sync

After that to use that in a file we should use a line in that file the line is:
  const prompt = require("prompt-sync")();
*/

const prompt = require("prompt-sync")();
let userName = prompt("Enter Your Name: ");

console.log(`Hi ${userName}`);
