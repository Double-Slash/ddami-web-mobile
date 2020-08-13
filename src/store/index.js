import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enhancer = composeWithDevTools(applyMiddleware(...middleware))
const store = createStore(
  reducer,
  enhancer
);
sagaMiddleware.run(rootSaga)

export default store;
// middleware : saga
