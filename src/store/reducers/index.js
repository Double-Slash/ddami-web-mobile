import { combineReducers } from 'redux';
import search from './searchReducer';


const rootReducer = combineReducers({
  search,
})

export default rootReducer