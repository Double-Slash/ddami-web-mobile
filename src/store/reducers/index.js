import { combineReducers } from 'redux';
import search from './searchReducer';
import workplace from './workplaceReducer';


const rootReducer = combineReducers({
  search,
  workplace
})

export default rootReducer