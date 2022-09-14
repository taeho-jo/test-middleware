import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getCommonCode, getErrorInfo, updateCommonCode } from '../../reducers/commonReducer';
import { fetchCommonCodeApi } from '../../../api/authApi';

function* getCommonCodeSaga() {
  try {
    const result = yield call(fetchCommonCodeApi);
    if (result?.code === '200') {
      yield put(updateCommonCode(result.data));
      localStorage.setItem('commonCode', JSON.stringify(result.data));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getErrorInfo(e));
  }
}

export function* commonSaga() {
  yield takeEvery(getCommonCode, getCommonCodeSaga);
}
