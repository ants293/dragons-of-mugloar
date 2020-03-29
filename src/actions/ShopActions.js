import { get, post } from "axios";
import { API_KEY } from "../config";
import { REQUEST_SHOP_LIST_SUCCESS } from "../types/ShopTypes";
import { UPDATE_GAME_INFO } from "../types/GameTypes";
import { getGameId } from "../shared/Utilities";

export const actionRequestShopList = async (dispatch) => {
  try {
    const { data } = await get(`${API_KEY}/${getGameId()}/shop`);

    dispatch({
      type: REQUEST_SHOP_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const actionRequestShopBuy = async (dispatch, id) => {
  try {
    const { data } = await post(`${API_KEY}//shop/buy/${id}`);

    dispatch({
      type: UPDATE_GAME_INFO,
      payload: data,
    });

    return data.shoppingSuccess;
  } catch (err) {
    console.log(err);
  }
};
