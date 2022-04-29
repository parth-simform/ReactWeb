import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  fetchData: ['get', 'loading'],
  saveData: ['response', 'loading'],
  delete: ['response', 'loading'],
});

export interface intialValue {
  loading: boolean;
  userData: any;
  delete: string;
}

const INITIAL_STATE: intialValue = {
  userData: [],
  loading: false,
  delete: '',
};
export interface Action {
  action: any;
  response: any;
}
export const fetchData = (state: intialValue, action: Action) => {
  return {
    ...state,
    loading: true,
    get: action.response,
  };
};
export const saveData = (state: intialValue, action: Action) => {
  return {
    ...state,
    userData: action.response,
    loading: false,
  };
};
export const deleteData = (state: intialValue) => {
  return {
    ...state,
    loading: true,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_DATA]: fetchData,
  [Types.SAVE_DATA]: saveData,
  [Types.DELETE]: deleteData,
});
