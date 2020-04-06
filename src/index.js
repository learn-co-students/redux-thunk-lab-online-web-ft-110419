import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// to get Redux configured
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import a reducer
import catsReducer from './reducers/catsReducer.js'; 

// pass reducer into createStore, assigning the return value to store
const store = createStore(catsReducer, applyMiddleware(thunk))

// wrap App component in Provider and pass store to it
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
