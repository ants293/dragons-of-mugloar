import { REQUEST_TASK_LIST_SUCCESS } from "../types/TaskTypes";

const INITIAL_STATE = {
  taskList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TASK_LIST_SUCCESS:
      return {
        ...state,
        taskList: [...action.payload],
      };
    default:
      return state;
  }
};
