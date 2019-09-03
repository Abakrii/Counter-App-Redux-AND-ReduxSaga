/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Main from './src/Main';
import { Provider } from "react-redux";
import configureStore from './src/store/configureStore';

const store = configureStore;
const App = () => {
  return (
    <Provider store={store}>
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </Fragment>
    </Provider>
  );
};

export default App;
