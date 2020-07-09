import { createStore } from 'redux';
import reducer from './reducers';

// TODO: Add server initial state
// second argument will come from server
const store = createStore(reducer);

// Add logging framework
const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store
