import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducers } from '.';
//firebase
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export default function configureStore(history, initialState) {
    const middleware = [
        thunk,
        routerMiddleware(history),
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history),
        firebase: firebaseReducer,
        firestore: firestoreReducer
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    };

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers)
    );
};
