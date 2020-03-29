import { connect } from "react-redux";
import Component from "./Infobar";
import { actionStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  const { game } = state;

  return {
    relevantStats: {
      lives: {
        value: game.lives,
        icon: "heart",
      },
      gold: {
        value: game.gold,
        icon: "coins",
      },
      level: {
        value: game.level,
        icon: "signal",
      },
      score: {
        value: game.score,
        icon: "star",
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
