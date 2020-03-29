import { connect } from "react-redux";
import Component from "./Play";
import {
  actionPurgeGameData,
  actionRequestStartGame,
} from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {
    gameId: state.game.gameId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionPurgeGameData: () => actionPurgeGameData(dispatch),
    actionRequestStartGame: () => actionRequestStartGame(dispatch),
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
