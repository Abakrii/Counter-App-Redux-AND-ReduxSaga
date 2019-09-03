/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {connect} from 'react-redux';

import CounterComponent from './components/CounterComponent';
import {increaseAction, decreaseAction} from './store/actions';

const mapStateToProps = state => {
  return {
    times: state.counter ? state.counter : 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: inc => dispatch(increaseAction(inc)),

    onDecrement: dec => dispatch(decreaseAction(dec)),
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);

export default Main;
