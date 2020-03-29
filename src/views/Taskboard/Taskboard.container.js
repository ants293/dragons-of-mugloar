import { connect } from "react-redux";
import Component from "./Taskboard";
import { actionRequestTaskList } from "../../actions/TaskActions";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestTaskList: () => actionRequestTaskList(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
