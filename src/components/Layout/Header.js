import React, { useContext } from "react";
import Divider from "./Divider";
import { SudokuContext } from "../../contexts/SudokuContext";
import NewGameButton from "./NewGameButton";

const Header = () => {
  const { showNewGameButton } = useContext(SudokuContext);

  return (
    <header>
      <div className="w-full py-2 flex items-end justify-between ">
        <div className="flex">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img className="object-none" src="/icons8-sudoku-100.png" alt="" />
          </a>
        </div>
        <div className="flex px-2 ">
          {showNewGameButton ? <NewGameButton /> : ""}
        </div>
      </div>
      <div className=" mb-2 ">
        <Divider />
      </div>
    </header>
  );
};

export default Header;
