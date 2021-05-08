// https://gist.github.com/DTrejo/901104
const readline = require("readline");
const ProgressBar = require("./ProgressBar");

// constants:
const NUMBER_OF_COLUMNS = process.stdout.columns;
const NUMBER_OF_ROWS = process.stdout.rows;

const point = {
  x: 10,
  y: 10,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminate the process if CTRL+C is pressed:
rl.on("close", function () {
  process.exit(0);
});

// const progressBar = new ProgressBar(30);
// progressBar.render();
