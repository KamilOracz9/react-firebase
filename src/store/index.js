import {createStore, combineReducers, applyMiddleware} from 'redux';
import uiReducer from "./reducers/ui";
import middlewares from "./middlewares";
import services from "./services";
import securityReducer from './reducers/security';

const rootReducer = combineReducers(
    {
        ui: uiReducer,
        security: securityReducer,
    }
);

export const configureStore = () => createStore(
    rootReducer,
    applyMiddleware(...middlewares.map(f => f(services)))
);
export default configureStore;