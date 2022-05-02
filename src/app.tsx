/* eslint-disable prettier/prettier */
import React from 'react';
// import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
// import Home from './App/module/Home';
import {store} from './App/redux/store';
import Router from './App/router';

const Main = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Main;
