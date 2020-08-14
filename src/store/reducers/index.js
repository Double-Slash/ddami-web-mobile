import { combineReducers } from 'redux';
import search from './searchReducer';
import workplace from './workplaceReducer';
import footer from './footerReducer'


const rootReducer = combineReducers({
  search,
  workplace,
  footer
})

export default rootReducer