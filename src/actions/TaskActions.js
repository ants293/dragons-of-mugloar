import { get, post } from "axios";
import { API_KEY } from "../config";
import { getGameId } from "../shared/Utilities";
import { REQUEST_TASK_LIST_SUCCESS } from "../types/TaskTypes";
import { UPDATE_GAME_INFO } from "../types/GameTypes";

export const actionRequestTaskList = async (dispatch) => {
  try {
    const { data } = await get(`${API_KEY}/${getGameId()}/messages`);

    dispatch({
      type: REQUEST_TASK_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const actionRequestTaskSolving = async (dispatch, id) => {
  try {
    const { data } = await post(`${API_KEY}/${getGameId()}/solve/${id}`);

    dispatch({
      type: UPDATE_GAME_INFO,
      payload: data,
    });

    actionRequestTaskList(dispatch);

    return data.success;

  } catch (err) {
    console.log(err);
  }
};
