import { combineReducers } from 'redux';

import { reducer as home } from '../pages/Home/HomeRedux';

export default combineReducers({
  home,
});
