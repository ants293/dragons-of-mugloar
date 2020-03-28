import { post } from "axios";
import { PLAYER_START_GAME } from "../types/GameTypes";

export const actionStartGame = async (dispatch) => {
  try {
    const { data } = await post(
      "https://dragonsofmugloar.com/api/v2/game/start"
    );

    dispatch({
      type: PLAYER_START_GAME,
      payload: data,
    });
  } catch (err) {}
};
