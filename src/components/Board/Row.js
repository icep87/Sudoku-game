import React, { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import NumberInput from "./NumberInput";
import { classNames } from "../../utils/Utils";

const Row = ({ rowNumbers, rowIndex, onNumberChange, liveValidation }) => {
  const { boardDetails } = useContext(SudokuContext);

  const numberChanged = (value, colIndex) => {
    onNumberChange(rowIndex, colIndex, value);
  };

  return (
    <div
      id={rowIndex}
      key={rowIndex}
      className={classNames(
        rowIndex % 3 === 2 && rowIndex !== 8 ? "border-b-2" : "",
        "grid grid-cols-9 gap-0 "
      )}
    >
      {rowNumbers.map((number, colIndex) => (
        <div
          id={colIndex}
          key={colIndex}
          className={classNames(
            colIndex % 3 === 2 && colIndex !== 8 ? "border-r-4" : "",
            "border border-opacity-100 text-center"
          )}
        >
          <NumberInput
            colIndex={colIndex}
            number={number}
            valid={boardDetails[rowIndex][colIndex].valid}
            initialNumber={boardDetails[rowIndex][colIndex].initial}
            numberChanged={numberChanged}
            liveValidation={liveValidation}
          />
        </div>
      ))}
    </div>
  );
};

export default Row;
