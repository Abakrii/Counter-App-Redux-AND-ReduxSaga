import {INCREMENT, DECREMENT} from '../actions/actionTypes';
//import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

export function* sayHello() {
  console.log('hello World');
}

function* increment() {
  console.log('This is increment Saga');
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log('This is decrements Saga');
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
