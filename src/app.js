const readline = require("readline");

// const map = [
//   "  ------------------------------------------------------ ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   " |                                                     | ",
//   "  ------------------------------------------------------ ",
// ];

// process.stdout.write("\u001b[2J\u001b[0;0H");

// for (var i = 0; i < map.length; i++) {
//   console.log(map[i]);
// }

// const point = [
//   {
//     x: 0,
//     y: 0,
//   },
// ];

// const ground = function () {
//   readline.cursorTo(process.stdout, 0, 0);
//   for (let i = 0; i < process.stdout.columns * 0.1; i++) {
//     process.stdout.write("_");
//   }
//   process.stdout.write("\x1B[?25l");
// };

// const Map = () => {
//   // clear screen:
//   process.stdout.write("\x1b[2J");
//   // ground();
//   process.stdout.write("*");
//   readline.moveCursor(process.stdout, 4, 4);
//   process.stdout.write("*");
//   readline.moveCursor(process.stdout, 0, 1);
//   process.stdout.write("*");
//   readline.moveCursor(process.stdout, -1, 0);
//   process.stdout.write("o");
//   readline.moveCursor(process.stdout, -2, -1);
//   process.stdout.write("o");

//   readline.moveCursor(process.stdout, -6, -4);
//   process.stdout.write("o");
// };

// Map();

// // const readline = require("readline");

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// // rl.on("close", function () {
// //   console.log("\nClosing...");
// //   process.exit(0);
// // });

// // // create ground:
// // readline.cursorTo(process.stdout, 0, 10);
// // for (let i = 0; i < process.stdout.columns; i++) {
// //   process.stdout.write("-");
// // }
// // process.stdout.write("\x1B[?25l");

// // // create character:
// // readline.cursorTo(process.stdout, 0, 10);
// // process.stdout.write("-");

// // // // // create obstacle:
// // // // readline.cursorTo(process.stdout, process.stdout.columns, 8);
// // // // for (let i = process.stdout.columns - 1; i >= 1; i--) {
// // // //   process.stdout.write("|");
// // // // }

// // // const ground = function () {
// // //   let ctrl = 0;
// // //   const exitCode = setInterval(function () {
// // //     process.stdout.write("_");
// // //     ctrl++;
// // //     if (ctrl === process.stdout.columns) {
// // //       clearInterval(exitCode);
// // //       process.stdout.write("\x1B[?25l");
// // //     }
// // //   }, 100);
// // // };

// // // const square = function () {
// // //   const initialPosition = {
// // //     x: 0,
// // //     y: 0,
// // //   };

// // //   const currentPosition = {
// // //     x: 0,
// // //     y: 0,
// // //   };

// // //   const exitCode = setInterval(function () {
// // //     if (currentPosition.x < 10 && currentPosition.y === 0) {
// // //       process.stdout.write("-");
// // //     }

// // //     if (currentPosition.x === 10 && currentPosition.y < 10) {
// // //       process.stdout.write("|");
// // //     }

// // //     if (currentPosition.x > 0 && currentPosition.y === 10) {
// // //       process.stdout.write("-");
// // //     }

// // //     if (currentPosition.x === 0 && currentPosition.y > 0) {
// // //       process.stdout.write("|");
// // //     }

// // //     if (
// // //       initialPosition.x === currentPosition.x &&
// // //       initialPosition.y === currentPosition.y - 1
// // //     ) {
// // //       clearInterval(exitCode);
// // //       process.stdout.write("\x1B[?25l");
// // //     }
// // //   }, 100);
// // // };

// // // const verticalLine = function () {
// // //   let ctrl = 0;
// // //   const exitCode = setInterval(function () {
// // //     process.stdout.write("|");
// // //     readline.moveCursor(process.stdout, -1, 1);
// // //     ctrl++;
// // //     if (ctrl === process.stdout.columns) {
// // //       clearInterval(exitCode);
// // //       process.stdout.write("\x1B[?25l");
// // //     }
// // //   }, 100);
// // // };

// // // // const walkAndErase = function () {
// // // //   let ctrl = 0;
// // // //   const exitCode = setInterval(function () {
// // // //     readline.moveCursor(process.stdout, 1, 0);
// // // //     process.stdout.write("-");
// // // //     readline.moveCursor(process.stdout, -1, 0);
// // // //     process.stdout.write(" ");
// // // //     ctrl++;
// // // //     if (ctrl === process.stdout.columns) {
// // // //       clearInterval(exitCode);
// // // //       process.stdout.write("\x1B[?25l");
// // // //     }
// // // //   }, 100);
// // // // };

// // // ground();

// // const { emitKeypressEvents } = require("readline");
// // const { stdin, stdout } = process;

// // // ==================== CONSTANTS ====================

// // const TICK_TIMEOUT = 150;

// // const BOX = {
// //   TOP_LEFT_CORNER: "\u250C",
// //   TOP_RIGHT_CORNER: "\u2510",
// //   BOTTOM_LEFT_CORNER: "\u2514",
// //   BOTTOM_RIGHT_CORNER: "\u2518",
// //   HORIZONTAL_LINE: "\u2500",
// //   VERTICAL_LINE: "\u2502",
// // };

// // const SNAKE_CHARACTER = "*";

// // // ==================== CLI ====================

// // const { columns, rows } = stdout;

// // const cursorTo = (row = 1, column = 1) => stdout.cursorTo(column - 1, row - 1);
// // const moveCursor = (h, v) => stdout.moveCursor(h, v);
// // const clearScreen = () => stdout.write("\x1b[2J");
// // const showCursor = () => stdout.write("\x1b[?25h");
// // const hideCursor = () => stdout.write("\x1b[?25l");
// // const output = (data) => stdout.write(data);

// // const fillPoint = (row = 1, column = 1, char = SNAKE_CHARACTER) => {
// //   let c = column > 1 ? column : 2;
// //   c = c < columns ? c : columns - 1;
// //   let r = row > 1 ? row : 2;
// //   r = r < rows ? r : rows - 1;
// //   cursorTo(r, c);
// //   output(char);
// // };

// // const fillPoints = (points, char = SNAKE_CHARACTER) => {
// //   for (const point of points) fillPoint(point[0], point[1], char);
// // };

// // const clearPoints = (points) => fillPoints(points, " ");

// // // ==================== BUSINESS LOGIC ====================

// // let mainTicks = null;
// // let dirVertical = 0;
// // let dirHorizontal = 2;
// // let foodRow = 1;
// // let foodColumn = 1;

// // const snakeBody = [
// //   [2, 6],
// //   [2, 4],
// //   [2, 2],
// // ];

// // const isGameBoardCoordinate = (v, h) => {
// //   return h > 1 && h < columns && v > 1 && v < rows;
// // };

// // const isOppositeDirection = (newV, newH) => {
// //   if (dirVertical + newV === 0 && dirHorizontal + newH === 0) return true;
// //   return false;
// // };

// // const isSnakeBodyPart = (v, h) => {
// //   return snakeBody.some(([sV, sH]) => sV === v && sH === h);
// // };

// // const endGame = (message) => {
// //   showCursor();
// //   cursorTo(1, 1);
// //   clearScreen();
// //   console.log(message);
// //   return process.exit(0);
// // };

// // stdin.on("keypress", (str, key) => {
// //   if (key.ctrl && key.name === "c") {
// //     return endGame("See you soon again :)");
// //   }

// //   let newVertical = dirVertical;
// //   let newHorizontal = dirHorizontal;

// //   switch (key.name) {
// //     case "up":
// //       newVertical = -1;
// //       newHorizontal = 0;
// //       break;
// //     case "right":
// //       newVertical = 0;
// //       newHorizontal = 2;
// //       break;
// //     case "down":
// //       newVertical = 1;
// //       newHorizontal = 0;
// //       break;
// //     case "left":
// //       newVertical = 0;
// //       newHorizontal = -2;
// //       break;
// //   }

// //   if (!isOppositeDirection(newVertical, newHorizontal)) {
// //     dirVertical = newVertical;
// //     dirHorizontal = newHorizontal;
// //   }
// // });

// // const randomInteger = (minimum, maximum) => {
// //   const min = Math.ceil(minimum);
// //   const max = Math.floor(maximum);
// //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // };

// // const drawBoard = () => {
// //   let i = -1;

// //   clearScreen();
// //   cursorTo(1, 1);

// //   for (i = 0; i < columns; ++i) {
// //     if (i === 0) output(BOX.TOP_LEFT_CORNER);
// //     else if (i === columns - 1) output(BOX.TOP_RIGHT_CORNER);
// //     else output(BOX.HORIZONTAL_LINE);
// //   }

// //   cursorTo(2, columns);

// //   for (i = 0; i < rows; ++i) {
// //     if (i === rows - 1) output(BOX.BOTTOM_RIGHT_CORNER);
// //     else output(BOX.VERTICAL_LINE);
// //     moveCursor(0, 1);
// //   }

// //   cursorTo(rows, columns - 1);

// //   for (i = 0; i < columns - 1; ++i) {
// //     if (i === columns - 2) output(BOX.BOTTOM_LEFT_CORNER);
// //     else output(BOX.HORIZONTAL_LINE);
// //     moveCursor(-2, 0);
// //   }

// //   cursorTo(rows - 1, 1);

// //   for (i = 0; i < rows - 2; ++i) {
// //     output(BOX.VERTICAL_LINE);
// //     moveCursor(-1, -1);
// //   }
// // };

// // const moveSnake = (snake, dirH, dirV) => {
// //   const headVerticalChange = snake[0][0] + dirV;
// //   const headHorizontalChange = snake[0][1] + dirH;
// //   if (
// //     isGameBoardCoordinate(headVerticalChange, headHorizontalChange) &&
// //     !isSnakeBodyPart(headVerticalChange, headHorizontalChange)
// //   ) {
// //     snake.unshift([headVerticalChange, headHorizontalChange]);
// //     snake.pop();
// //   } else {
// //     clearInterval(mainTicks);
// //     endGame("You loose! Your score is: " + (snakeBody.length - 3));
// //   }
// // };

// // const generateFood = () => {
// //   foodRow = 1;
// //   foodColumn = 1;
// //   while (foodRow % 2 !== 0) foodRow = randomInteger(2, rows - 1);
// //   while (foodColumn % 2 !== 0) foodColumn = randomInteger(2, columns - 1);
// //   fillPoint(foodRow, foodColumn, "$");
// // };

// // const shouldResizeSnake = () => {
// //   if (snakeBody[0][0] === foodRow && snakeBody[0][1] === foodColumn) {
// //     snakeBody.push(snakeBody[snakeBody.length - 1]); // double the tail
// //     generateFood();
// //   }
// // };

// // const setupGame = () => {
// //   fillPoints(snakeBody);
// //   generateFood();
// // };

// // const render = () => {
// //   clearPoints(snakeBody);
// //   moveSnake(snakeBody, dirHorizontal, dirVertical);
// //   shouldResizeSnake();
// //   fillPoints(snakeBody);
// // };

// // // ==================== MAIN THREAD ====================

// // emitKeypressEvents(stdin);
// // stdin.setRawMode(true);
// // stdin.setEncoding("utf8");
// // hideCursor();

// // drawBoard();
// // setupGame();

// // mainTicks = setInterval(render, TICK_TIMEOUT);
// // stdout.on("drain", () => {
// //   clearInterval(mainTicks);
// //   mainTicks = setInterval(render, TICK_TIMEOUT);
// // });

// ESC[#A	moves cursor up # lines
// ESC[#B	moves cursor down # lines
// ESC[#C	moves cursor right # spaces
// ESC[#D	moves cursor left # spaces

// Script can be written as is
// process.stdout.write("\u001b[2J\u001b[0;0H");

// process.stdout.write("\u001b[0;30m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;31m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;32m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;33m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;34m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;35m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;36m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0;37m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;30m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;31m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;32m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;33m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;34m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;35m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;36m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[1;37m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[31m");
// process.stdout.write("Hello there\n");

// process.stdout.write("\u001b[0m");
// process.stdout.write("Hello there\n");

// process.stdin.setRawMode(true);

// // resume stdin in the parent process (node app won't quit all by itself
// // unless an error or process.exit() happens)
// process.stdin.resume();

// // switch from binary to something more useful
// process.stdin.setEncoding("utf8");

// // on any data into stdin
// process.stdin.on("data", function (key) {
//   //moveTo(0, 0);
//   //process.stdout.write("" + key.charCodeAt(0));
//   //process.stdout.write( key );

//   if (key === "\u001b[A") {
//     // down arrow
//     process.stdout.write("[up]");
//   } else if (key === "\u001b[B") {
//     process.stdout.write("[down]");
//   } else if (key === "\u001b[C") {
//     process.stdout.write("[right]");
//   } else if (key === "\u001b[D") {
//     process.stdout.write("[left]");
//   }

//   if (key === "\u001b") {
//     process.exit();
//   }
// });

// var map = [
//   "                  ┌───────┐     ",
//   "    ┌───────┐     │·······│     ",
//   "    │·······│     │·······│     ",
//   "    │·······│     │·······│     ",
//   "    │········░░░░░········│     ",
//   "    │·······│     │·······│     ",
//   "    │·······│     │·······│     ",
//   "    └───────┘     └───────┘     ",
// ];

// setTimeout(function () {
//   // Clear and move to (0, 0)
//   process.stdout.write("\u001b[2J\u001b[0;0H");

//   for (var i = 0; i < map.length; i++) {
//     console.log(map[i]);
//   }
// }, 2000);
