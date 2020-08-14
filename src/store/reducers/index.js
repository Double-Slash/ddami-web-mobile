import { combineReducers } from 'redux';
import search from './searchReducer';
import workplace from './workplaceReducer';
import work from './workReducer'
import footer from './footerReducer';


const rootReducer = combineReducers({
  search,
  workplace,
  work,
  footer
})

export default rootReducer