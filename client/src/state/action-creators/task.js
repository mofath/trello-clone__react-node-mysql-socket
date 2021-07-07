import ActionType from "../action-types";
import services from '../../services';
import { eventNames } from "../../socket";

export const getTasks = () => {
  return async (dispatch) => {

    dispatch({ type: ActionType.GET_TASKS, });

    try {
      const { tasks } = await services().taskService.getAllTasks();

      dispatch({
        type: ActionType.GET_TASKS_SUCCESS,
        payload: [...tasks],
      });

    } catch (err) {
      dispatch({
        type: ActionType.GET_TASKS_ERROR,
        payload: err.message,
      });
    }
  };
};


export const addTask = (socket, taskData) => {
  return async (dispatch) => {

    dispatch({ type: ActionType.ADD_TASK });

    try {
      const { task } = await services().taskService.addTask(taskData);
      // socket.emit(eventNames.ADD_TASK, task);

      dispatch({
        type: ActionType.ADD_TASK_SUCCESS,
        payload: task,
      });

    } catch (err) {
      dispatch({
        type: ActionType.GET_TASKS_ERROR,
        payload: err.message,
      });
    }
  };
};


export const updateTask = ({socket, srcId, destId, srcIdx, destIdx, cardId }) => {
  return async (dispatch) => {
    dispatch({ type: ActionType.UPDATE_TASK });

    try {
      if (srcId !== destId) {
        await services().taskService.updateTask({ id: cardId, status: destId });
        // socket.emit(eventNames.UPDATE_TASK, { id: cardId, status: srcId });
      }

      dispatch({
        type: ActionType.UPDATE_TASK_SUCCESS,
        payload: { srcId, destId, srcIdx, destIdx, cardId }
      });

    } catch (err) {
      dispatch({
        type: ActionType.UPDATE_TASK_ERROR,
        payload: err.message,
      });
    }
  };
};
