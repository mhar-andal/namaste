import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import foo from './reducers/foo';

export default combineReducers({
  foo,
  routing,
});
