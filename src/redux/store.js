import { createStore, compose, applyMiddleware } from 'redux';
import combinedReducers from './combinedReducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TODO: Add server initial state
// second argument will come from server
const store = createStore(
  combinedReducers /* preloadedState, */,
  composeEnhancer(applyMiddleware(thunk))
);

// Add logging framework
// const unsubscribe = store.subscribe()

export default store;
