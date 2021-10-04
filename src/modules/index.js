import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import writeFun, { writeFunSaga } from './writeFun';
import postFun, { postFunSaga } from './postFun';
import postsFun, { postsFunSaga } from './postsFun';

const rootReducer = combineReducers({
  loading,
  write,
  post,
  posts,
  writeFun,
  postFun,
  postsFun,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga(), writeFunSaga(), postFunSaga(), postsFunSaga()]);
}

export default rootReducer;
