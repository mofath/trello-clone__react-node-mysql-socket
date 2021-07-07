import ActionType from "../action-types";

const INITIAL_STATE = {
    isAuthenticated: false,
    isLoading: null,
    userInfo: {},
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ActionType.AUTH_REQUEST:
        case ActionType.LOGIN_REQUEST:
        case ActionType.REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case ActionType.AUTH_SUCCESS:
        case ActionType.LOGIN_SUCCESS:
            return {
                isLoading: false,
                isAuthenticated: true,
                userInfo: action.payload,
            };

        case ActionType.REGISTER_SUCCESS:
            return {
                isLoading: false,
                isAuthenticated: true,
                userInfo: action.payload,
            };

        case ActionType.LOGOUT_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
            };

        case ActionType.AUTH_ERROR:
        case ActionType.LOGIN_ERROR:
        case ActionType.REGISTER_ERROR:
        case ActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                userInfo: null,
                isAuthenticated: false,
                isLoading: false,
            };
            
        default:
            return state;
    }
};

export default reducer;