import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import {reducer} from './reducers/index';
import {MainSaga} from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middlewares));

console.log(store, 'store');

sagaMiddleware.run(MainSaga);

export {store};
