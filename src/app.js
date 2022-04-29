/* eslint-disable prettier/prettier */
import React from 'react';
import Router from './App/router';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';

const Main = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Main;
