import { REQUEST_SHOP_LIST_SUCCESS } from "../types/ShopTypes";

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SHOP_LIST_SUCCESS:
      return {
        ...state,
        items: [...action.payload],
      };
    default:
      return state;
  }
};
