import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "../../../utils/Utils";
import SudokuApi from "../../../services/SudokuApi";
import { SudokuContext } from "../../../contexts/SudokuContext";

const levels = [
  {
    name: "Super Easy",
    description: "The board will be generated with 79 numbers visible",
  },
  {
    name: "Easy",
    description: "The board will be generated with 51 numbers visible",
  },
  {
    name: "Intermediate",
    description: "The board will be generated with 31 numbers visible",
  },
  {
    name: "Hard",
    description: "The board will be generated with 25 numbers visible",
  },
  {
    name: "Extreme",
    description: "The board will be generated with 17 numbers visible",
  },
];

const New = () => {
  const {
    restAPI,
    updateBoardNumbers,
    setShowNewGameButton,
    generateBoardDetails,
    updateInitialBoard,
  } = useContext(SudokuContext);
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);
  const history = useHistory();

  const startNewGame = () => {
    console.log("starting new game");
    let board = [];

    // Let's get a new board
    if (restAPI) {
      board = SudokuApi.getSudokuBoard(selectedLevel.name);
    } else {
      board = SudokuApi.noBackendBoard(selectedLevel.name);
    }
    generateBoardDetails(board);
    updateBoardNumbers(board);
    updateInitialBoard(board);
    history.push("/game");
  };

  useEffect(() => {
    setShowNewGameButton(false);
  });

  return (
    <div className="p-2">
      <RadioGroup value={selectedLevel} onChange={setSelectedLevel}>
        <RadioGroup.Label className="sr-only">Level settings</RadioGroup.Label>
        <div className="bg-white rounded-md -space-y-px">
          {levels.map((level, levelIdx) => (
            <RadioGroup.Option
              key={level.name}
              value={level}
              className={({ checked }) =>
                classNames(
                  levelIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                  levelIdx === levels.length - 1
                    ? "rounded-bl-md rounded-br-md"
                    : "",
                  checked
                    ? "bg-indigo-50 border-indigo-200 z-10"
                    : "border-gray-200",
                  "relative border p-4 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked
                        ? "bg-indigo-600 border-transparent"
                        : "bg-white border-gray-300",
                      active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                      "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? "text-indigo-900" : "text-gray-900",
                        "block text-sm font-medium"
                      )}
                    >
                      {level.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={classNames(
                        checked ? "text-indigo-700" : "text-gray-500",
                        "block text-sm"
                      )}
                    >
                      {level.description}
                    </RadioGroup.Description>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <div className="mt-4">
        <button
          type="button"
          className="w-full items-center px-5 py-4 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={startNewGame}
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default New;
