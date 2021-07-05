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
                tasks: [...state.tasks, action.payload.newTask]
            };


        case ActionType.UPDATE_TASK_SUCCESS:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIdxStart,
                droppableIdxEnd,
                draggableId
            } = action.payload;

            // in the same list
            if(droppableIdStart === droppableIdEnd) {
                const list = state.find(list =>droppableIdStart === list.id)
                const card = list.cards.splice(droppableIdxStart, 1);
                list.cards.splice(droppableIdxEnd, 0, ...card)
            }

            return {
                ...state,
                task: state.tasks.map((task, idx) => {
                    if (idx === action.payload.idx)
                        return {
                            ...task, status: action.payload.newStatus
                        }
                    return task;
                }),
                selectedAns: null
            };

        default:
            return state;
    }
};

export default reducer;