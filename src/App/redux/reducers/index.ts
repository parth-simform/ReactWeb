import {createReducer, createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  fetchData: ['get', 'loading'],
  saveData: ['response', 'loading'],
  deleteUser: ['email', 'loading'],
  updateUser: ['data', 'loading'],
});

export interface intialValue {
  loading: boolean;
  userData: any;
  delete: any;
  update: [];
}

const INITIAL_STATE: intialValue = {
  userData: [],
  loading: false,
  delete: [],
  update: [],
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
export const deleteUser = (state: intialValue, action: Action) => {
  return {
    ...state,
    loading: true,
    get: action.response,
  };
};
export const updateUser = (state: intialValue, action: Action) => {
  return {
    ...state,
    loading: true,
    get: action.response,
  };
};
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_DATA]: fetchData,
  [Types.SAVE_DATA]: saveData,
  [Types.DELETE_USER]: deleteUser,
  [Types.UPDATE_USER]: updateUser,
});
