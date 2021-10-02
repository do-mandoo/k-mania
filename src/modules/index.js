import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  loading,
  write,
});

export function* rootSaga() {
  yield all([writeSaga()]);
}

export default rootReducer;
