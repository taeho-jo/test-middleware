import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getCommonCode, getErrorInfo, updateCommonCode } from '../../reducers/commonReducer';
import { fetchCommonCodeApi } from '../../../api/authApi';
import { getRefreshToken } from '../../reducers/authReducer';
import { getUserInfo } from '../../reducers/userReducer';

function* getCommonCodeSaga() {
  try {
    const result = yield call(fetchCommonCodeApi);
    if (result?.code === '200') {
      yield put(updateCommonCode(result.data));
      localStorage.setItem('commonCode', JSON.stringify(result.data));
    }
  } catch (e: any) {
    console.error(e);
    console.log(e.response.data);
    yield put(getErrorInfo(e));
    yield put(getRefreshToken());
    yield delay(1000);
    yield put(getCommonCode());
  }
}

export function* commonSaga() {
  yield takeEvery(getCommonCode, getCommonCodeSaga);
}
