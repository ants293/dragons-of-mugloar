import { connect } from "react-redux";
import Component from "./Taskboard";
import {
  actionRequestTaskList,
  actionRequestTaskSolving,
} from "../../actions/TaskActions";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestTaskList: () => actionRequestTaskList(dispatch),
    actionRequestTaskSolving: (id) => actionRequestTaskSolving(dispatch, id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
