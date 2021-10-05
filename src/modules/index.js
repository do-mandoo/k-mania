import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
// import getData from './board';

const rootReducer = combineReducers({
  loading,
  write,
  post,
  posts,
  // getData,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
