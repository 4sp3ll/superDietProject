import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducers } from '.';
import categoryReducer from '../pages/SearchEngine/containers/CategoryReducer'
//firebase
import fbConfig from '../firebase/firebase'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { firestoreReducer } from 'redux-firestore'

const logsMiddleware = (store) => (next) => (action) => {
    console.log('Logged action', action);
    next(action)
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

export default function configureStore(history, initialState) {
    const middleware = [
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        routerMiddleware(history),
        logsMiddleware
    ];

    const rootReducer = combineReducers({
        ...reducers,
        firestore: firestoreReducer,
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
        compose(
            reactReduxFirebase(fbConfig, rrfConfig),
            reduxFirestore(fbConfig),
            applyMiddleware(...middleware),
            ...enhancers),
    );
}
