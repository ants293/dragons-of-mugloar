import { Redirect } from "react-router";
import React from "react";

function PrivateRoute({ component, game }) {
  return game && game.gameId && game.lives !== 0 ? (
    component
  ) : (
    <Redirect to="/play" />
  );
}

export default PrivateRoute;
