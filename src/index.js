import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
    	<App />
  	</Provider>
	,document.getElementById('root'));


registerServiceWorker();
