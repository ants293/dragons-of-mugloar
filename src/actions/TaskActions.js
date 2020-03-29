import { get } from "axios";
import { API_KEY } from "../config";
import { gameID } from "../shared/Utilities";
import { REQUEST_TASK_LIST_SUCCESS } from "../types/TaskTypes";

export const actionRequestTaskList = async (dispatch) => {
  try {
    const { data } = await get(`${API_KEY}/${gameID}/messages`);

    dispatch({
      type: REQUEST_TASK_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
