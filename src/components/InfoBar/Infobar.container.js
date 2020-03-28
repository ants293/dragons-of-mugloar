import { connect } from "react-redux";
import Component from "./Infobar";
import { actionStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  const { game } = state;

  return {
    relevantStats: {
      lives: {
        value: game.lives,
        icon: "lives",
      },
      gold: {
        value: game.gold,
        icon: "gold",
      },
      level: {
        value: game.level,
        icon: "level",
      },
      score: {
        value: game.score,
        icon: "score",
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionGameStart: () => actionStartGame(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
