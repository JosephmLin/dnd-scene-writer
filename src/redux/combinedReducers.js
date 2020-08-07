import { combineReducers } from 'redux';
import reducers from './reducers';

console.log(reducers);

export default combineReducers({
  ...reducers,
});
