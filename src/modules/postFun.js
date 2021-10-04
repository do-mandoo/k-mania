import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequesrSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [READ_POST_FUN, READ_POST_FUN_SUCCESS, READ_POST_FUN_FAILURE] = createRequestActionTypes(
  'postFun/READ_POST_FUN'
);
const UNLOAD_POST_FUN = 'postFun/UNLOAD_POST_FUN'; // 포스트 페이지 벗어날 때 데이터 비우기.

export const readPostFun = createAction(READ_POST_FUN, id => id);
export const unloadPostFun = createAction(UNLOAD_POST_FUN);

const readPostFunSaga = createRequestSaga(READ_POST_FUN, postsAPI.readFun);
export function* postFunSaga() {
  yield takeLatest(READ_POST_FUN, readPostFunSaga);
}

const initialSate = {
  postFun: null,
  errorFun: null,
};

const postFun = handleActions(
  {
    [READ_POST_FUN_SUCCESS]: (state, { payload: postFun }) => ({
      ...state,
      postFun,
    }),
    [READ_POST_FUN_FAILURE]: (state, { payload: errorFun }) => ({
      ...state,
      errorFun,
    }),
    [UNLOAD_POST_FUN]: () => initialSate,
  },
  initialSate
);

export default postFun;
