export const gameID = (function () {
  const localState = JSON.parse(localStorage.getItem("state"));
  return localState ? localState.game.gameId : "";
})();
