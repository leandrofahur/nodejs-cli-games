const readline = require("readline");
const { stdin, stdout } = process;

// UNICODE UTF-8
// https://www.w3schools.com/charsets/ref_utf_geometric.asp
// https://unicode-table.com/en/sets/emoji/
// Emoji
// https://apps.timwhitlock.info/emoji/tables/unicode

stdin.setRawMode(true);
stdin.setEncoding("utf-8");
readline.emitKeypressEvents(stdin);

const hideCursor = function () {
  rl.write("\x1b[?25l");
};

const showCursor = function () {
  rl.write("\x1b[?25h");
};

// set cursor to the absolute position
const setCursorToPosition = function (x, y) {
  readline.cursorTo(stdout, x, y);
};

// set cursor to relative position
const setCursorToRelativePosition = function (dx, dy) {
  readline.moveCursor(stdout, dx, dy);
};

const clearScreen = function () {
  rl.write("\x1b[2J");
};

const rl = readline.createInterface(stdin, stdout);

const Map = function () {
  hideCursor();
  clearScreen();
  setCursorToPosition(0, 0);

  for (let i = 0; i < stdout.columns; i++) {
    setCursorToPosition(i, 0);
    stdout.write("□");
    setCursorToPosition(i, stdout.rows);
    stdout.write("□");
    setCursorToPosition(0, i);
    stdout.write("□");
    setCursorToPosition(stdout.columns, i);
    stdout.write("□");
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const generateBait = function () {
  const position = {
    x: getRandomInt(1, stdout.columns - 1),
    y: getRandomInt(1, stdout.rows - 1),
  };
  return position;
};

let dx;
let dy;

const snake = [
  {
    x: 10,
    y: 10,
  },
];

Map();
const bait = generateBait();
setCursorToPosition(bait.x, bait.y);
stdout.write("🍣");

const animateSnake = (snake, dx, dy) => {
  ddx = snake[0].x + dx;
  ddy = snake[0].y + dy;

  snake.unshift({ x: ddx, y: ddy });
  snake.pop();
};

let key = null;
stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit(0);
  }

  switch (key.name) {
    case "up":
      dx = -1;
      dy = 0;
      break;

    case "left":
      dx = 0;
      dy = -2;
      break;

    case "down":
      dx = 1;
      dy = 0;
      break;

    case "right":
      dx = 0;
      dy = 2;
      break;
  }
});

const pos = [];

setInterval(() => {
  // setCursorToPosition(10 + i, 10);
  // stdout.write("o");
  pos.unshift({ x: 10 + dx, y: 10 + dy });
  // setCursorToRelativePosition(dx, dy);
  // stdout.write(" ");
  pos.pop();
  // i++;
}, 300);

// const animateSnake = () => {
//   // let i = 0;
//   // let pos = [];
//   setInterval(() => {
//     // setCursorToPosition(10 + i, 10);
//     // stdout.write("o");
//     pos.unshift({ x: 10 + dx, y: 10 + dy });
//     // setCursorToRelativePosition(dx, dy);
//     // stdout.write(" ");
//     pos.pop();
//     // i++;
//   }, 300);
// };
