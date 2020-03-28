import { PLAYER_START_GAME } from "../../types/GameTypes";

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
    case PLAYER_START_GAME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
