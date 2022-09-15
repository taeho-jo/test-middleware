import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getUserInfo, setUserInfo } from '../../reducers/userReducer';
import { fetchUserInfoApi } from '../../../api/userApi';
import { isShow } from '../../reducers/modalReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getProductList } from '../../reducers/teamReducer';

function* getUserInfoSaga() {
  try {
    const token = localStorage.getItem('accessToken');

    const result = yield call(fetchUserInfoApi, token);

    if (result.code === '200') {
      const data = result.data;
      yield put(setUserInfo(data));
      if (data.emailVerifiedYn === 'N') {
        yield put(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data.emailVerifiedYn === 'Y') {
        return;
      }
    }
  } catch (e: any) {
    console.error(e);
    console.log(e.response.data, '!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    yield put(getRefreshToken());
    yield delay(1000);
    yield put(getUserInfo());
  }
}

export function* userSaga() {
  yield takeEvery(getUserInfo, getUserInfoSaga);
}
