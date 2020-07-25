import { createStore } from 'redux';
import reducer from './reducers';

// TODO: Add server initial state
// second argument will come from server
const store = createStore(
	reducer, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Add logging framework
// const unsubscribe = store.subscribe()

export default store
