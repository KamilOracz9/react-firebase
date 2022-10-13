import {createStore, combineReducers, applyMiddleware} from 'redux';
import uiReducer from "./reducers/ui";
import middlewares from "./middlewares";
import services from "./services";
import securityReducer from './reducers/security';
import todosReducer from './reducers/todos';

const rootReducer = combineReducers(
    {
        ui: uiReducer,
        security: securityReducer,
        todos: todosReducer,
    }
);

export const configureStore = () => createStore(
    rootReducer,
    applyMiddleware(...middlewares.map(f => f(services)))
);
export default configureStore;