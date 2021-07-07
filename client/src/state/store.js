import {
    compose,
    createStore,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import reucers from "./reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reucers,
    {},
    composeEnhancers(applyMiddleware(thunk))
);