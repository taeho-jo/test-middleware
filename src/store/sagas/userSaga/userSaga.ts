import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { getInviteUserInfo, getUserInfo, setUserInfo, updateUserProfile } from '../../reducers/userReducer';
import { fetchInviteUserInfoApi, fetchUserInfoApi, fetchUserInfoUpdateApi } from '../../../api/userApi';
import { isShow } from '../../reducers/modalReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getProductList, getTeamList } from '../../reducers/teamReducer';
import { Cookies } from 'react-cookie';
import { showToast } from '../../reducers/toastReducer';
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
      yield put(getInviteUserInfo({ teamSeq: action.payload.teamSeq, callback: action.payload.callback }));
    }
  }
}
// 유저 프로필 등록
function* updateUserProfileInfo(action) {
  try {
    const result = yield call(fetchUserInfoUpdateApi, action.payload.sendObject);
    if (result?.code === '201') {
      yield put(showToast({ message: '프로필이 등록되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      yield put(setUserInfo(result.data));
      if (action.payload.type === 'modify') {
        yield put(isShow({ isShow: false, type: '' }));
        yield put(showToast({ message: '회원정보가 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      } else {
        action.payload.callback.push('/admin/team');
      }
    }
  } catch (e: any) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(updateUserProfile({ sendObject: action.payload.sendObject, callback: action.payload.callback }));
    }
  }
}

export function* userSaga() {
  yield takeEvery(getUserInfo, getUserInfoSaga);
  yield takeEvery(getInviteUserInfo, getInviteUserInfoSaga);
  yield takeEvery(updateUserProfile, updateUserProfileInfo);
}
