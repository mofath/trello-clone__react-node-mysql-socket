
import ActionType from "../action-types";
import services from '../../services';

const authenticate = () => async (dispatch) => {
    dispatch({ type: ActionType.AUTH });
    try {
        const { user } = await services().authService.authenticate();
        dispatch({
            type: ActionType.AUTH_SUCCESS,
            payload: user
        });
    }
    catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR });
    }
}


const login = (loginData) => async (dispatch) => {
    dispatch({ type: ActionType.LOGIN });
    try {
        const { data } = await services().authService.login(loginData);
        dispatch({
            type: ActionType.LOGIN_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        dispatch({ type: ActionType.LOGIN_ERROR });
    }
}


const signup = (signupData) => async (dispatch) => {
    dispatch({ type: ActionType.REGISTER });
    try {
        const { data } = await services.signup(signupData);
        dispatch({
            type: ActionType.REGISTER_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        dispatch({ type: ActionType.REGISTER_ERROR });
    }
}



export {
    login,
    signup,
    authenticate,
};