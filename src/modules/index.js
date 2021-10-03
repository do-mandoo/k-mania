import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  loading,
  write,
  post,
});

export function* rootSaga() {
  yield all([writeSaga(), postSaga()]);
}

export default rootReducer;
