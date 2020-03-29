import { connect } from "react-redux";
import Component from "./Taskboard";
import {
  actionRequestTaskList,
  actionRequestTaskSolving,
} from "../../actions/TaskActions";
import { actionPurgeGameData } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    lives: state.game.lives,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestTaskList: () => actionRequestTaskList(dispatch),
    actionRequestTaskSolving: (id) => actionRequestTaskSolving(dispatch, id),
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
    purgePlayerInfo: () => actionPurgeGameData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
