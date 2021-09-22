function checkSquare(board, rowIndex, colIndex, value) {
  //Find the square's first row
  const squareRow = Math.floor(rowIndex / 3) * 3;
  //Find the square's first column
  const squareColumn = Math.floor(colIndex / 3) * 3;

  //Now each box is 3x3
  //So we check each cell in the 3x3 square from the square starting row and column
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      // If the value is already set in the array position skip testing value
      if (board[squareRow + row][squareColumn + col] === value) return false;
    }
  }
  return true;
}

function checkColumn(board, colIndex, value) {
  //Loop each row and check if number already in column
  for (let row = 0; row < board.length; row++) {
    if (board[row][colIndex] === value) return false;
  }

  return true;
}

function checkRow(board, rowIndex, value) {
  //Loop each row and check if number already exists
  for (let col = 0; col < board[rowIndex].length; col++) {
    if (board[rowIndex][col] === value) return false;
  }

  return true;
}

function checkNumber(board, rowIndex, colIndex, value) {
  if (
    checkSquare(board, rowIndex, colIndex, value) &&
    checkRow(board, rowIndex, value) &&
    checkColumn(board, colIndex, value)
  ) {
    return true;
  }
  return false;
}

function findEmptyCell(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!Boolean(board[row][col])) return [row, col];
    }
  }
  // as we are returning numbers if any cell is empty let's keep the same logic
  // return negative number if no empty cells are found.
  return [-1, -1];
}

function validateBoardItems(board, rowIndex, colIndex, value) {
  //We need to clear the cell we are testing
  board[rowIndex][colIndex] = "";
  const valid = checkNumber(board, rowIndex, colIndex, value);

  //Put back the value that was removed.
  board[rowIndex][colIndex] = value;

  return valid;
}
// Solving board by running a all possible number validation for all of the empty cells.
function solveBoard(board) {
  const emptyCell = findEmptyCell(board);
  const emptyCellRow = emptyCell[0];
  const emptyCellColumn = emptyCell[1];

  if (emptyCellRow === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (checkNumber(board, emptyCellRow, emptyCellColumn, num)) {
      board[emptyCellRow][emptyCellColumn] = num;
      solveBoard(board);
    }
  }

  //Check if there are still any empty cells
  if (findEmptyCell(board)[0] !== -1) {
    board[emptyCellRow][emptyCellColumn] = "";
  } else {
    return board;
  }
}

export default { checkNumber, solveBoard, validateBoardItems };
