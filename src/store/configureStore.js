import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {counterReducer} from './reducers';
import rootSaga from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({counter: counterReducer});

const configureStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);


export default configureStore;
