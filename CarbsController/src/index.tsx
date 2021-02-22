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
import { GlobalStyle } from './ui/Globalstyle'
import { Provider } from 'react-redux';
// firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

library.add(fab, fas, far, faCheckSquare, faCoffee, faSpinner, faSquare, faCheck)

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const initialState = {}

// Get the application-wide store instance, prepopulating with state from the server where available.
export const store = configureStore(history, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
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
