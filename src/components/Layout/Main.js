import React from "react";
import { Switch, Route } from "react-router-dom";
import New from "../Pages/New/New";
import Game from "../Pages/Game/Game";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <New />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
