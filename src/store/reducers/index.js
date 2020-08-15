import { combineReducers } from 'redux';
import search from './searchReducer';
import workplace from './workplaceReducer';
import work from './workReducer'
import footer from './footerReducer';
import shop from './shopReducer'
import header from './headerReducer';


const rootReducer = combineReducers({
  search,
  workplace,
  work,
  footer,
  shop,
  header,
})

export default rootReducer