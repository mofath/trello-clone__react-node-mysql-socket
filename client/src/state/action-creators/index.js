import ActionType from "../action-types";
import services from '../../services';

export const getTasks = () => {
  return async (dispatch) => {

    try {
      const { tasks } = await services().taskService.getTasks();

      dispatch({
        type: ActionType.GET_TASKS_SUCCESS,
        payload: tasks,
      });

    } catch (err) {
      dispatch({
        type: ActionType.GET_TASKS_ERROR,
        payload: err.message,
      });
    }
  };
};


export const addTask = (newTask) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.ADD_TASK,
    });

    try {
      await services().taskService.addTask(newTask);

      dispatch({
        type: ActionType.ADD_TASK_SUCCESS,
        payload: newTask,
      });

    } catch (err) {
      dispatch({
        type: ActionType.ADD_TASK_ERROR,
        payload: err.message,
      });
    }
  };
};


export const updateTask = (
  droppableIdStart,
  droppableIdEnd,
  droppableIdxStart,
  droppableIdxEnd,
  draggableId
) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.UPDATE_TASK,
    });

    try {
      await services().taskService.updateTask();

      dispatch({
        type: ActionType.UPDATE_TASK_SUCCESS,
        payload: {
          droppableIdStart,
          droppableIdEnd,
          droppableIdxStart,
          droppableIdxEnd,
          draggableId
        }
      });

    } catch (err) {
      dispatch({
        type: ActionType.UPDATE_TASK_ERROR,
        payload: err.message,
      });
    }
  };
};


export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIdxStart,
  droppableIdxEnd
) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.UPDATE_TASK,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIdxStart,
        droppableIdxEnd
      }
    });
  };
};


