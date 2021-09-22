import React from "react";
import Row from "./Row";

const Board = ({ boardNumbers, onNumberChange, liveValidation, ...props }) => {
  return (
    <div className="grid grid-rows-9 gap-0">
      {boardNumbers.map((rowNumbers, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          rowNumbers={rowNumbers}
          onNumberChange={onNumberChange}
          liveValidation={liveValidation}
        />
      ))}
    </div>
  );
};

export default Board;
