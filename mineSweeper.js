let puzzle = ["  *  ", "  *  ", "*****", "  *  ", "  *  "];

annotate(puzzle);

function annotate(puzzle) {
  let concatonatedArrays = [];
  for (let j = 0; j < puzzle.length; j++) {
    concatonatedArrays.push(puzzle[j].split(""));
  }
  return solvePuzzle(concatonatedArrays);
}

function solvePuzzle(concatonatedArrays) {
  for (let x = 0; x < concatonatedArrays.length; x++) {
    for (let y = 0; y < concatonatedArrays[0].length; y++) {
      let count = 0;

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

  return arraysToString(concatonatedArrays);
}

function arraysToString(arrays) {
  let modified = arrays.join().replaceAll(",", "");
  let width = arrays.length;

  const wrap = (str, width) => {
    var letters = [],
      i = 0;
    while (i < str.length) {
      letters.push(str.slice(i, (i += width)));
    }
    return letters.join("\n");
  };
  return wrap(modified, width);
}
console.log(annotate(puzzle));
