import { combineReducers } from "redux";
import GameReducer from "./GameReducer";
import ShopReducer from "./ShopReducer";

export default combineReducers({
  game: GameReducer,
  shop: ShopReducer,
});
