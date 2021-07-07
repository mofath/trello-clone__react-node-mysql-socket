import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    task: taskReducer,
    auth: authReducer
});

export default reducers;

