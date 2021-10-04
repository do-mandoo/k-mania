import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequesrSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POSTS_FUN, LIST_POSTS_FUN_SUCCESS, LIST_POSTS_FUN_FAILURE] = createRequestActionTypes(
  'postsFun/LIST_POSTS_FUN'
);

export const listPostsFun = createAction(LIST_POSTS_FUN, id => id);

const listPostsFunSaga = createRequestSaga(LIST_POSTS_FUN, postsAPI.listFun);
export function* postsFunSaga() {
  yield takeLatest(LIST_POSTS_FUN, listPostsFunSaga);
}

const initialState = {
  postsFun: null,
  errorFun: null,
};

const postsFun = handleActions(
  {
    [LIST_POSTS_FUN_SUCCESS]: (state, { payload: postsFun }) => ({
      ...state,
      postsFun,
    }),
    [LIST_POSTS_FUN_FAILURE]: (state, { payload: errorFun }) => ({
      ...state,
      errorFun,
    }),
  },
  initialState
);

export default postsFun;
