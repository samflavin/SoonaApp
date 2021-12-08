let puzzle = ["  *  ", "  *  ", "*****", "  *  ", "  *  "];
let concatonatedArrays = [];

enterPuzzleSize(puzzle);
solvePuzzle();
function enterPuzzleSize(puzzle) {
  console.log(puzzle.length, "length");

  for (let j = 0; j < puzzle.length; j++) {
    console.log(puzzle[j], "og");
    concatonatedArrays.push(puzzle[j].split(""));
  }

  console.log(concatonatedArrays, "digested puzzle");
}

function solvePuzzle(digestedPuzzle) {
  for (let x = 0; x < concatonatedArrays.length; x++) {
    for (let y = 0; y < concatonatedArrays[0].length; y++) {
      let count = 0;
      console.log("were reading", concatonatedArrays[x][y]);
      if (concatonatedArrays[x][y] !== "*") {
        if (
          concatonatedArrays[x - 1] !== undefined &&
          concatonatedArrays[x - 1][y] !== undefined &&
          concatonatedArrays[x - 1][y] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x - 1] !== undefined &&
          concatonatedArrays[x - 1][y + 1] !== undefined &&
          concatonatedArrays[x - 1][y + 1] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x] !== undefined &&
          concatonatedArrays[x][y + 1] !== undefined &&
          concatonatedArrays[x][y + 1] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x + 1] !== undefined &&
          concatonatedArrays[x + 1][y + 1] !== undefined &&
          concatonatedArrays[x + 1][y + 1] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x + 1] !== undefined &&
          concatonatedArrays[x + 1][y] !== undefined &&
          concatonatedArrays[x + 1][y] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x + 1] !== undefined &&
          concatonatedArrays[x + 1][y - 1] !== undefined &&
          concatonatedArrays[x + 1][y - 1] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x] !== undefined &&
          concatonatedArrays[x][y - 1] !== undefined &&
          concatonatedArrays[x][y - 1] === "*"
        ) {
          count += 1;
        }
        if (
          concatonatedArrays[x - 1] !== undefined &&
          concatonatedArrays[x - 1][y - 1] !== undefined &&
          concatonatedArrays[x - 1][y - 1] === "*"
        ) {
          count += 1;
        }
      }

      if (count > 0) {
        concatonatedArrays[x][y] = count;
      } else if (concatonatedArrays[x][y] !== "*") {
        concatonatedArrays[x][y] = ".";
      }
    }
  }

  arraysToString(concatonatedArrays);
}

function arraysToString(arrays, puzzleWidth) {
  let modified = arrays.join().replaceAll(",", "");
  let width = (puzzleWidth = arrays.length);

  const wrap = (str, width) => {
    var letters = [],
      i = 0;
    while (i < str.length) {
      letters.push(str.slice(i, (i += width)));
    }
    return letters.join("\n");
  };

  console.log(wrap(modified, width));
}