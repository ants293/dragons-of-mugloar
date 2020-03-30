import { Redirect } from "react-router";
import React from "react";
import PropTypes from "prop-types";

PrivateRoute.propTypes = {
  game: PropTypes.object,
  component: PropTypes.any.isRequired,
};

function PrivateRoute({ component, game }) {
  return game && game.gameId ? component : <Redirect to="/play" />;
}

export default PrivateRoute;
