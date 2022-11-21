import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getInviteUserInfo, getUserInfo, setUserInfo } from '../../reducers/userReducer';
import { fetchInviteUserInfoApi, fetchUserInfoApi } from '../../../api/userApi';
import { isShow } from '../../reducers/modalReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getProductList, getTeamList } from '../../reducers/teamReducer';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const expires = new Date();
expires.setDate(expires.getDate() + 9);

// 유저 정보 가져오는 saga
function* getUserInfoSaga(action) {
  try {
    const token = cookies.get('accessToken');

    const result = yield call(fetchUserInfoApi, token);

    if (result.code === '200') {
      const data = result?.data;
      console.log(data, '!!!!!!!!!!!!!!!!!!!');
      yield put(setUserInfo(data));
      cookies.set(`emailVerifiedYn`, data?.emailVerifiedYn, { path: '/', expires });
      cookies.set(`firstTimeYn`, data?.firstTimeYn, { path: '/', expires });

      if (data?.emailVerifiedYn === 'N') {
        action.payload.callback.push('/');
        yield put(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data?.emailVerifiedYn === 'Y') {
        if (data?.firstTimeYn === 'Y') {
          action.payload.callback.push('/admin/profile');
        }
        if (data?.firstTimeYn === 'N') {
          action.payload.callback.push('/admin/team');
        }
      }
    }
  } catch (e: any) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getUserInfo({ callback: action.payload.callback }));
    }
  }
}
// 초대받은 유저 정보 호출
function* getInviteUserInfoSaga(action) {
  try {
    const token = cookies.get('accessToken');

    const result = yield call(fetchInviteUserInfoApi, action.payload.teamSeq, token);

    if (result.code === '200') {
      const data = result?.data;
      yield put(setUserInfo(data));
      cookies.set(`emailVerifiedYn`, data?.emailVerifiedYn, { path: '/', expires });
      cookies.set(`firstTimeYn`, data?.firstTimeYn, { path: '/', expires });

      if (data?.emailVerifiedYn === 'N') {
        action.payload.callback.push('/');
        yield put(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data?.emailVerifiedYn === 'Y') {
        if (data?.firstTimeYn === 'Y') {
          action.payload.callback.push('/admin/profile');
        }
        if (data?.firstTimeYn === 'N') {
          action.payload.callback.push('/admin/team');
        }
      }
    }
  } catch (e: any) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getUserInfo({ callback: action.payload.callback }));
    }
  }
}

export function* userSaga() {
  yield takeEvery(getUserInfo, getUserInfoSaga);
  yield takeEvery(getInviteUserInfo, getInviteUserInfoSaga);
}
