import { all } from 'redux-saga/effects';
import { testSaga } from './testSaga';

export function* rootSaga() {
  yield all([testSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
