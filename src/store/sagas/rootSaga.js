//mport {delay} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {sayHello, watchDecrement, watchIncrement} from './index';

export default function* rootSaga() {
  yield all([sayHello(), watchIncrement(), watchDecrement()]);
}
