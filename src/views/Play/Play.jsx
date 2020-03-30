import React from "react";
import PropTypes from "prop-types";

PlayView.propTypes = {
  game: PropTypes.object,
  actionPurgeGameData: PropTypes.func.isRequired,
  actionRequestStartGame: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
};

function PlayView({
  game = {},
  actionPurgeGameData,
  actionRequestStartGame,
  redirect,
}) {
  return (
    <div className="container h-full">
      <div className="h-full d-flex justify-content-center align-items-center flex-column">
        <button
          className="menu-button"
          onClick={() =>
            onNewGame(actionPurgeGameData, actionRequestStartGame, redirect)
          }
        >
          New Game
        </button>
        <button
          className={`menu-button ${setDisabled(game)}`}
          onClick={() => redirect("/")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const setDisabled = (game) => {
  if (!game || !game.gameId) {
    return "menu-button--disabled";
  }
};

const onNewGame = (deleteGame, newGame, redirect) => {
  deleteGame();
  newGame().then(() => {
    redirect("/");
  });
};

export default PlayView;
