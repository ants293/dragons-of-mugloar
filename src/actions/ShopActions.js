import { post } from "axios";
import { API_KEY } from "../config";
import { REQUEST_SHOP_LIST } from "../types/ShopTypes";
import { gameID } from "../shared/Utilities";

export const actionRequestShopList = async (dispatch) => {
  try {
    const { data } = await post(`${API_KEY}/${gameID}/shop`);

    dispatch({
      type: REQUEST_SHOP_LIST,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
