import { post } from "axios";
import { PLAYER_START_GAME } from "../types/GameTypes";
import { API_KEY } from "../config";

export const actionShopList = async (dispatch) => {
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
