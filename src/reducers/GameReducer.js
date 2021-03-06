import {
  REQUEST_PLAYER_START_GAME,
  PURGE_GAME_INFO,
  UPDATE_GAME_INFO,
} from "../types/GameTypes";

const INITIAL_STATE = {
  gameId: "",
  lives: 0,
  gold: 0,
  level: 0,
  score: 0,
  highScore: 0,
  turn: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLAYER_START_GAME:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_GAME_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case PURGE_GAME_INFO:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
