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
  props.get.props.navigation.push('UserDetails');
}

function* deleteUser(props: any) {
  let email = props.email;
  let arr: Array<saveData> = yield select(state => state.userData);
  let data: Array<saveData> = [];
  data = arr.filter((x: saveData) => x.email !== email);
  yield put(Creators.saveData(data));
}
function* updateUser(props: any) {
  let navigation = props.data.props.navigation;
  let email = props.data.email;
  let name = props.data.name;
  let arr: Array<saveData> = yield select(state => state.userData);
  let objIndex = arr.findIndex(obj => obj.email === email);
  arr[objIndex].name = name;
  yield put(Creators.saveData(arr));
  navigation.push('UserDetails');
}

function* MainSaga() {
  yield takeLatest(Types.FETCH_DATA, fetchData);
  yield takeLatest(Types.DELETE_USER, deleteUser);
  yield takeLatest(Types.UPDATE_USER, updateUser);
}

export default MainSaga;
