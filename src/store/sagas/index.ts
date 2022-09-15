import { all } from 'redux-saga/effects';
import { testSaga } from './testSaga';
import { commonSaga } from './commonSaga';
import { teamProductSaga } from './teamSaga';
import { researchSaga } from './researchSaga';
import { userSaga } from './userSaga';
import { authSaga } from './authSaga';

export function* rootSaga() {
  yield all([testSaga(), commonSaga(), teamProductSaga(), researchSaga(), userSaga(), authSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
