//Chessboard

let size = 8;
let board = "";
let y = 0;

for (y; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);


/*
    Chessboard
    You can build the string by starting with an empty one ("") and repeatedly
    adding characters. A newline character is written "\n".
    To work with two dimensions, you will need a loop inside of a loop. Put
    braces around the bodies of both loops to make it easy to see where they start
    and end. Try to properly indent these bodies. The order of the loops must
    follow the order in which we build up the string (line by line, left to right, top
    to bottom). So the outer loop handles the lines, and the inner loop handles the
    characters on a line.
    You’ll need two bindings to track your progress. To know whether to put a
    space or a hash sign at a given position, you could test whether the sum of the
    two counters is even (% 2).
    Terminating a line by adding a newline character must happen after the line
    has been built up, so do this after the inner loop but inside the outer loop.
*/