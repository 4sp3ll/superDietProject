import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee, faSpinner, faSquare, faCheck, fas } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyle } from './utils/Globalstyle'
import { Provider } from 'react-redux';
// firebase

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore



library.add(fab, fas, far, faCheckSquare, faCoffee, faSpinner, faSquare, faCheck)

// const fbConfig = {
//   apiKey: "AIzaSyB2f7xSD0sEhiSqvKxd5Gw3DXjaIkF47LY",
//   authDomain: "auth-development-89063.firebaseapp.com",
//   projectId: "auth-development-89063",
//   storageBucket: "auth-development-89063.appspot.com",
//   messagingSenderId: "700875408663",
//   appId: "1:700875408663:web:4a0ce1da14148577d3e352"
// }

// // Initialize firebase instance
// firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const initialState = {}

// Get the application-wide store instance, prepopulating with state from the server where available.
// connected-react-router
//export tomek
export const store = configureStore(history, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
