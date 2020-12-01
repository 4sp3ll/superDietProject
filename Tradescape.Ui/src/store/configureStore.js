import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducers } from '.';
import categoryReducer from '../pages/SearchEngine/containers/CategoryReducer'


const logsMiddleware = (store) => (next) => (action) => {
    console.log('Logged action', action);
    next(action)
}

export default function configureStore(history, initialState) {
    const middleware = [
        thunk,
        routerMiddleware(history),
        logsMiddleware
    ];

    const rootReducer = combineReducers({
        ...reducers,
        // connected-react-router
        router: connectRouter(history),
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );
}
