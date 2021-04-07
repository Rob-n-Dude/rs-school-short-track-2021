/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const checkTopLeft = (matrix, i, j) => {
  const res = matrix[i - 1][j - 1] === true ? 1 : 0;
  return res;
};
const checkTop = (matrix, i, j) => {
  const res = matrix[i - 1][j] === true ? 1 : 0;
  return res;
};
const checkTopRight = (matrix, i, j) => {
  const res = matrix[i - 1][j + 1] === true ? 1 : 0;
  return res;
};
const checkLeft = (matrix, i, j) => {
  const res = matrix[i][j - 1] === true ? 1 : 0;
  return res;
};
const checkRight = (matrix, i, j) => {
  const res = matrix[i][j + 1] === true ? 1 : 0;
  return res;
};
const checkBotLeft = (matrix, i, j) => {
  const res = matrix[i + 1][j - 1] === true ? 1 : 0;
  return res;
};
const checkBot = (matrix, i, j) => {
  const res = matrix[i + 1][j] === true ? 1 : 0;
  return res;
};
const checkBotRight = (matrix, i, j) => {
  const res = matrix[i + 1][j + 1] === true ? 1 : 0;
  return res;
};

function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const resultRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let cellValue = 0;
      if (matrix[i][j] === true) {
        cellValue = 1;
      } else if (i === 0) {
        if (j === 0) {
          cellValue = checkRight(matrix, i, j) + checkBotRight(matrix, i, j)
                    + checkBot(matrix, i, j);
        } else if (j === matrix[i].length - 1) {
          cellValue = checkLeft(matrix, i, j) + checkBotLeft(matrix, i, j) + checkBot(matrix, i, j);
        } else {
          cellValue = checkLeft(matrix, i, j) + checkRight(matrix, i, j)
                    + checkBotRight(matrix, i, j) + checkBotLeft(matrix, i, j)
                    + checkBot(matrix, i, j);
        }
      } else if (i === matrix.length - 1) {
        if (j === 0) {
          cellValue = checkRight(matrix, i, j) + checkTopRight(matrix, i, j)
                    + checkTop(matrix, i, j);
        } else if (j === matrix[i].length - 1) {
          cellValue = checkLeft(matrix, i, j) + checkTopLeft(matrix, i, j)
                    + checkTop(matrix, i, j);
        } else {
          cellValue = checkLeft(matrix, i, j) + checkRight(matrix, i, j)
                    + checkTopRight(matrix, i, j) + checkTopLeft(matrix, i, j)
                    + checkTop(matrix, i, j);
        }
      } else if (j === 0) {
        cellValue = checkRight(matrix, i, j) + checkBotRight(matrix, i, j)
                    + checkBot(matrix, i, j) + checkTopRight(matrix, i, j)
                    + checkTop(matrix, i, j);
      } else if (j === matrix[i].length - 1) {
        cellValue = checkLeft(matrix, i, j) + checkBotLeft(matrix, i, j)
                    + checkBot(matrix, i, j) + checkTopLeft(matrix, i, j)
                    + checkTop(matrix, i, j);
      } else {
        cellValue = checkLeft(matrix, i, j) + checkRight(matrix, i, j)
                    + checkBotRight(matrix, i, j) + checkBotLeft(matrix, i, j)
                    + checkTopRight(matrix, i, j) + checkTopLeft(matrix, i, j)
                    + checkBot(matrix, i, j) + checkTop(matrix, i, j);
      }

      resultRow.push(cellValue);
    }
    result.push(resultRow);
  }
  return result;
}

module.exports = minesweeper;
