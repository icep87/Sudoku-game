import React, { useContext, useState, useEffect } from "react";
import Board from "../../Board/Board";
import SudokuHelper from "../../../services/SudokuHelper";
import { SudokuContext } from "../../../contexts/SudokuContext";
import ToggleSwitch from "./ToggleSwitch";
import OptionsButton from "./OptionsButton";
import Divider from "../../Layout/Divider";
import SolvedModal from "../../Layout/SolvedModal";
import { useHistory } from "react-router-dom";

const Game = () => {
  const {
    boardNumbers,
    updateBoardNumbers,
    boardDetails,
    updateBoardDetails,
    initialBoard,
    setShowNewGameButton,
  } = useContext(SudokuContext);
  const history = useHistory();
  const [remainingAmount, setRemainingAmount] = useState();
  const [liveValidation, setLiveValidation] = useState(true);
  const [solvedModalOpen, setSolvedModalOpen] = useState(false);
  const [cheater, setCheater] = useState(false);

  // Update the number in boardNumbers and validate the new number
  const updateNumber = (squareIndex, valueIndex, value) => {
    // We will add the entered number into the boardNumbers even if the number is invalid
    const newBoard = [...boardNumbers];
    newBoard[squareIndex][valueIndex] = value;
    updateBoardNumbers(newBoard);
  };

  // Run validation on the number
  // TODO: Right now if a number changed invalidates another number that was provided by the user it won't mark the second number as invalid. Need a fix for that in the future.
  const validateNumber = (rowIndex, colIndex, value) => {
    // Calling the helper function to validate the number.
    const validNumber = SudokuHelper.validateBoardItems(
      boardNumbers,
      rowIndex,
      colIndex,
      value
    );
    console.log(validNumber);
    let newBoardDetails = [...boardDetails];
    newBoardDetails[rowIndex][colIndex].valid = validNumber;
    updateBoardDetails(newBoardDetails);
  };

  // Handle change for the number
  const onNumberChange = (rowIndex, colIndex, value) => {
    console.log(
      "NumberChanged to: " +
        value +
        " on column: " +
        colIndex +
        " in row: " +
        rowIndex
    );
    // First we will validate the entered number before adding it to boardNumbers, so we can update the UI with correct validation.
    validateNumber(rowIndex, colIndex, value);
    updateNumber(rowIndex, colIndex, value);
  };

  const validateBoard = () => {
    for (let rowIndex = 0; rowIndex < boardNumbers.length; rowIndex++) {
      for (
        let colIndex = 0;
        colIndex < boardNumbers[rowIndex].length;
        colIndex++
      ) {
        validateNumber(rowIndex, colIndex, boardNumbers[rowIndex][colIndex]);
      }
    }
    setLiveValidation(true);
    solveCheck();
  };

  const solveCheck = () => {
    if (
      boardDetails.flat(Infinity).filter((item) => item.valid === false)
        .length === 0
    ) {
      setSolvedModalOpen(true);
    }
  };

  // Solve board
  // We will run solveBoard on the originalBoard when loaded, as the users input might have made the board unsolvable
  const solveBoard = () => {
    console.log("Running solveBoard");
    const solvedBoard = SudokuHelper.solveBoard(initialBoard);
    // We disable the validation module as the entire board is resolved
    // TODO: Add validation if board cannot be solved. Right now this will just show an error.
    setLiveValidation(false);
    updateBoardNumbers(solvedBoard);
    setCheater(true);
    setRemainingAmount(countRemaining(boardNumbers));
    // Solve board does not update the BoardDetails so SolveCheck() would fail.
    // TODO: solveBoard should also update the BoardDetails
    setSolvedModalOpen(true);
  };

  // Count remaining empty cells in the boardNumbers
  const countRemaining = (board) =>
    // TODO: Fix the NaN values count
    board.flat(Infinity).filter((item) => item === "").length;

  // When boardNumber has changed, update the remainingAmount of cells to fill.
  useEffect(() => {
    setRemainingAmount(countRemaining(boardNumbers));
  }, [boardNumbers]);

  // Hook for remainingAmount change
  useEffect(() => {
    if (remainingAmount === 0) {
      solveCheck();
    }
  }, [remainingAmount]);

  useEffect(() => {
    setShowNewGameButton(true);

    if (boardNumbers.length === 0) {
      console.log("Boardnumber is empty");
      history.push("/");
    }
  });

  return (
    <div className="p-2">
      {solvedModalOpen && (
        <SolvedModal
          setSolvedModalOpen={setSolvedModalOpen}
          cheater={cheater}
        />
      )}
      <Board
        boardNumbers={boardNumbers}
        onNumberChange={onNumberChange}
        liveValidation={liveValidation}
      />
      <div>
        <p className="text-sm text-gray-400 text-right my-1">
          Remaining numbers:{" "}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
            {remainingAmount}
          </span>
        </p>
      </div>
      <div className="my-1">
        <div className="py-2 mb-1">
          <Divider label="Options" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <ToggleSwitch
            label="Live validation"
            description="Validate the number upon input"
            enabled={liveValidation}
            changeToggle={setLiveValidation}
          />
          {/* TODO: Add loading state to the button */}
          <OptionsButton
            label="Validate the board"
            description="This action will validate entire board (after running this Live Validation will be enabled)"
            buttonLabel="Validate"
            clickAction={validateBoard}
          />
          {/* TODO: Add loading state to the button */}
          <OptionsButton
            label="Solve the board"
            description="This action will solve the entire board from the initial board. "
            buttonLabel="Solve"
            clickAction={solveBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
