import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {storeX} from './store'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = storeX()

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() =>
	console.log(store.getState())
)



ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>
	,document.getElementById('root'));


registerServiceWorker();
