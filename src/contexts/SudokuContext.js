import React, { createContext, useState, useEffect } from "react";
import Configuration from "../Configuration";

export const SudokuContext = createContext();

function SudokuProvider({ children }) {
  const [boardNumbers, setBoardNumbers] = useState([]);
  const [boardDetails, setBoardDetails] = useState([]);
  const [showNewGameButton, setShowNewGameButton] = useState(false);
  const [initialBoard, setInitialBoard] = useState([]);
  const [restAPI, setRestAPI] = useState(Configuration.useRestAPI);

  const updateBoardNumbers = (board) => {
    setBoardNumbers(board);
  };

  const updateBoardDetails = (details) => {
    setBoardDetails(details);
  };

  const updateInitialBoard = (board) => {
    setInitialBoard(board);
  };

  const generateBoardDetails = (board) => {
    const details = [];
    for (let row = 0; row < board.length; row++) {
      const rowDetails = [];
      for (let cell = 0; cell < board[row].length; cell++) {
        if (board[row][cell] !== "") {
          rowDetails.push({
            initial: true,
            valid: true,
          });
        } else {
          rowDetails.push({
            initial: false,
            valid: false,
          });
        }
      }
      details.push(rowDetails);
    }

    setBoardDetails(details);
  };

  return (
    <SudokuContext.Provider
      value={{
        restAPI,
        setRestAPI,
        boardNumbers,
        updateBoardNumbers,
        generateBoardDetails,
        boardDetails,
        updateBoardDetails,
        initialBoard,
        updateInitialBoard,
        showNewGameButton,
        setShowNewGameButton,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
}

export { SudokuProvider };
