import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './misc/storage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './reducers';

const persistedState = loadState();

const store = createStore(
    combinedReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
