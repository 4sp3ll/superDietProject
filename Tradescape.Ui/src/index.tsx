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


library.add(fab, fas, far, faCheckSquare, faCoffee, faSpinner, faSquare, faCheck)

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
// connected-react-router
//export tomek
export const store = configureStore(history);


ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
