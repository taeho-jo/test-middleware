import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getCommonCode, getErrorInfo, updateCommonCode } from '../../reducers/commonReducer';
import { fetchCommonCodeApi } from '../../../api/authApi';
import { getRefreshToken } from '../../reducers/authReducer';
import { getUserInfo } from '../../reducers/userReducer';
import { clearLocalStorage } from '../../../common/util/commonFunc';

function* getCommonCodeSaga() {
  try {
    const result = yield call(fetchCommonCodeApi);
    if (result?.code === '200') {
      yield put(updateCommonCode(result.data));
      localStorage.setItem('commonCode', JSON.stringify(result.data));
    }
  } catch (e: any) {
    console.error(e);
    console.log(e.response.data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getCommonCode());
    }
    if (e?.response?.data?.code === 'E0002') {
      clearLocalStorage();
    }
    yield put(getErrorInfo(e));
  }
}

export function* commonSaga() {
  yield takeEvery(getCommonCode, getCommonCodeSaga);
}
