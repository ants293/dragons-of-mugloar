import { combineReducers } from "redux";
import GameReducer from "./GameReducer/GameReducer";

export default combineReducers({
  game: GameReducer,
});
