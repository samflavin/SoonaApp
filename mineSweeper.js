export const annotate = (puzzle) => {
  let concatonatedArrays = [];
  for (let j = 0; j < puzzle.length; j++) {
    concatonatedArrays.push(puzzle[j].split(""));
  }

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
        concatonatedArrays[x][y] = " ";
      }
    }
  }
  let formattedSolution = [];
  for (let z = 0; z < concatonatedArrays.length; z++) {
    formattedSolution.push(concatonatedArrays[z].join(""));
  }
  return formattedSolution;
};

