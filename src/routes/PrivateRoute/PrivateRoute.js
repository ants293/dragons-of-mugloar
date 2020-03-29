import { Redirect } from "react-router";
import React from "react";

function PrivateRoute({ component, game }) {
  return game && game.gameId ? (
    component
  ) : (
    <Redirect to="/play" />
  );
}

export default PrivateRoute;
