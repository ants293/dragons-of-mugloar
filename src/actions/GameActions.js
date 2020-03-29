import { post } from "axios";
import { PLAYER_START_GAME, PURGE_GAME_INFO } from "../types/GameTypes";
import { API_KEY } from "../config";

export const actionRequestStartGame = async (dispatch) => {
  try {
    const { data } = await post(`${API_KEY}/game/start`);

    dispatch({
      type: PLAYER_START_GAME,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const actionPurgeGameData = async (dispatch) => {
  dispatch({
    type: PURGE_GAME_INFO,
  });
};
