// https://gist.github.com/DTrejo/901104
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  console.log("You just typed: " + cmd);
});
