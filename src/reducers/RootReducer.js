import GameReducer from "./GameReducer";
import ShopReducer from "./ShopReducer";
import TaskReducer from "./TaskReducer";

import { combineReducers } from "redux";

export default combineReducers({
  game: GameReducer,
  shop: ShopReducer,
  tasks: TaskReducer,
});
