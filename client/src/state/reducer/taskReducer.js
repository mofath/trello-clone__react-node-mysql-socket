import ActionType from "../action-types";

const INITIAL_STATE = {
    tasks: [],
    isLoading: false,
    error: ''
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionType.GET_TASKS:
        case ActionType.ADD_TASK:
        case ActionType.UPDATE_TASK:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case ActionType.GET_TASKS_ERROR:
        case ActionType.ADD_TASK_ERROR:
        case ActionType.UPDATE_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ActionType.GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            };

        case ActionType.ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tasks: [...state.tasks, action.payload]
            };

        case ActionType.UPDATE_TASK_SUCCESS:
            const { srcId, destId, srcIdx, destIdx, cardId } = action.payload;

            // TODO: reorder cards in the same list
            if (srcId === destId) {
                console.log(srcIdx, destIdx);
                return state;
            }

            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === cardId) {
                        return {
                            ...task, status: destId
                        }
                    }
                    return task;
                })
            };

        default:
            return state;
    }
};

export default reducer;