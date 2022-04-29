import {takeLatest, select, put} from 'redux-saga/effects';

import {Creators, Types} from '../redux/reducers';
interface saveData {
  email: string;
  name: string;
}

function* fetchData(props: any) {
  let arr: Array<saveData> = yield select(state => state.userData);
  arr.push({email: props.get.email, name: props.get.name});
  yield put(Creators.saveData(arr));
  props.get.props.navigation.push('Settings');
}

function* saveData() {
  let arr: Array<saveData> = yield select(state => state.userData);
  console.log(arr);
}

function* MainSaga() {
  yield takeLatest(Types.FETCH_DATA, fetchData);
  yield takeLatest(Types.SAVE_DATA, saveData);
}

export default MainSaga;
