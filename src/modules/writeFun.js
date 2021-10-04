import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequesrSaga';
import * as postsAPI from '../lib/api/posts';

const INITIALIZE = 'writeFun/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'writeFun/CHANGE_FIELD'; // 특정 key값 바꾸기
const [WRITE_POST_FUN, WRITE_POST_FUN_SUCCESS, WRITE_POST_FUN_FAILURE] = createRequestActionTypes(
  'writeFun/WRITE_POST_FUN'
);

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writePostFun = createAction(WRITE_POST_FUN, ({ title, text }) => ({
  title,
  text,
}));

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST_FUN, postsAPI.writeNews);
export function* writeFunSaga() {
  yield takeLatest(WRITE_POST_FUN, writePostSaga);
}

const initialState = {
  titleFun: '',
  textFun: '',
  postFun: null,
  postErrorFun: null,
};

const writeFun = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST_FUN]: state => ({
      ...state,
      // post와 postError를 초기화
      postFun: null,
      postErrorFun: null,
    }),
    [WRITE_POST_FUN_SUCCESS]: (state, { payload: postFun }) => ({
      ...state,
      postFun,
    }),
    [WRITE_POST_FUN_FAILURE]: (state, { payload: postErrorFun }) => ({
      ...state,
      postErrorFun,
    }),
  },
  initialState
);

export default writeFun;
