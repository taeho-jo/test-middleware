import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getCommonCode, getErrorInfo, updateCommonCode } from '../../reducers/commonReducer';
import { fetchCommonCodeApi } from '../../../api/authApi';
import { authReset, getRefreshToken } from '../../reducers/authReducer';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { showToast } from '../../reducers/toastReducer';
import { userReset } from '../../reducers/userReducer';
import { teamReset } from '../../reducers/teamReducer';
import { researchReset } from '../../reducers/researchCreateReducer';
import { Cookies } from 'react-cookie';

function* getCommonCodeSaga() {
  try {
    const result = yield call(fetchCommonCodeApi);
    if (result?.code === '200') {
      yield put(updateCommonCode(result.data));
      localStorage.setItem('commonCode', JSON.stringify(result.data));
    }
  } catch (e: any) {
    console.error(e);

    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getCommonCode());
    }
    if (e?.response?.data?.code === 'E0027') {
      yield put(userReset());
      yield put(authReset());
      yield put(teamReset());
      yield put(researchReset());
      const cookies = new Cookies();
      cookies.remove('accessToken', { path: '/' });
      cookies.remove('emailVerifiedYn', { path: '/' });
      cookies.remove('firstTimeYn', { path: '/' });
      cookies.remove('userInfo', { path: '/' });
      yield put(showToast({ message: '세션이 만료되어 로그아웃되었습니다.', isShow: true, status: 'warning', duration: 5000 }));
    }
    yield put(getErrorInfo(e));
  }
}

export function* commonSaga() {
  yield takeEvery(getCommonCode, getCommonCodeSaga);
}
