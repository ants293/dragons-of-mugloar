import React from "react";

function PlayView({
  gameId = "",
  actionPurgeGameData = () => {},
  actionRequestStartGame = () => {},
  redirect = () => {},
}) {
  return (
    <div>
      <button onClick={() => onNewGame(actionPurgeGameData, actionRequestStartGame, redirect)}>New Game</button>
      <button>Continue</button>
    </div>
  );
}

const onNewGame = (deleteGame, newGame, redirect) => {
  deleteGame();
  newGame().then(() => {
    redirect("/");
  });
};

export default PlayView;
