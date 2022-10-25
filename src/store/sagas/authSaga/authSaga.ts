import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import {
  authReset,
  confirmEmailAction,
  getRefreshToken,
  getRefreshTokenSuccess,
  getSignupUserInfo,
  loginAction,
  resendConfirmEmail,
  setEmail,
  setToken,
  signupAction,
} from '../../reducers/authReducer';
import { fetchEmailConfirmApi, fetchEmailResendApi, fetchLoginApi, fetchRefreshToken, fetchSignupApi } from '../../../api/authApi';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { showToast } from '../../reducers/toastReducer';
import { isShow } from '../../reducers/modalReducer';
import { getUserInfo, updateCancelWithdrawal, userReset } from '../../reducers/userReducer';
import { teamReset } from '../../reducers/teamReducer';
import { researchReset } from '../../reducers/researchCreateReducer';

// 로그인
function* loginSaga(action) {
  try {
    const sendObject = {
      userId: action.payload.userId,
      password: action.payload.password,
    };
    const response = yield call(fetchLoginApi, sendObject);
    if (response?.code === '200') {
      localStorage.setItem('accessToken', response.data.token);
      yield put(setToken(response.data.token));
      yield put(showToast({ message: response.message, isShow: true, status: 'success', duration: 5000 }));
      yield put(getUserInfo());
      if (action.payload.callback) {
        action.payload.callback.push('/admin/research/create');
      }
      if (action.payload.joinCallback) {
        action.payload.joinCallback.push(`/?teamSeq=${action.payload.teamSeq}&token=${response.data.token}`);
      }
    }
  } catch (e: any) {
    console.error(e);
    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
    if (e?.response?.data?.code === 'E0022') {
      yield put(isShow({ isShow: true, type: 'cancelWithdrawalModal' }));
      yield put(updateCancelWithdrawal(true));
    }
  } finally {
    yield put(getSignupUserInfo({ userName: '', userId: '' }));
  }
}

// 회원가입
function* signupSaga(action) {
  try {
    const response = yield call(fetchSignupApi, action.payload.sendObject);

    if (response.code === '201') {
      yield put(showToast({ message: `${response?.message}`, isShow: true, status: 'success', duration: 5000 }));
      yield put(setEmail(action.payload?.sendObject?.userId));
      yield put(isShow({ isShow: true, type: 'confirmSignup' }));
      yield put(getSignupUserInfo({ userName: action.payload?.sendObject?.userName, userId: action.payload?.sendObject?.userId }));
    }
  } catch (e) {
    console.error(e);
    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
  }
}

// 이메일 인증
function* confirmEmailSaga(action) {
  try {
    const response = yield call(fetchEmailConfirmApi);

    yield put(isShow({ isShow: false, type: '' }));
    yield put(getUserInfo());
  } catch (e) {
    console.error(e);

    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
  }
}

// 이메일 재전송
function* resendConfirmEmailSaga(action) {
  try {
    // resendConfirmEmail
    const response = yield call(fetchEmailResendApi, action.payload);

    yield put(showToast({ message: '인증메일이 재전송 되었습니다.', isShow: true, status: 'success', duration: 5000 }));
  } catch (e) {
    console.error(e);
    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
  }
}

// refresh 토큰 발급
function* getRefreshTokenSaga() {
  try {
    const result = yield call(fetchRefreshToken);
    if (result.code === '200') {
      const token = result?.data?.token;
      localStorage.setItem('accessToken', token);
      yield put(getRefreshTokenSuccess(token));
    }
  } catch (e: any) {
    if (e?.response?.data?.code === 'E0002') {
      yield put(userReset());
      yield put(authReset());
      yield put(teamReset());
      yield put(researchReset());

      clearLocalStorage();
      window.location.href = 'https://stag.diby.io';
    }
    if (e?.response?.data?.code === 'E0027') {
      yield put(userReset());
      yield put(authReset());
      yield put(teamReset());
      yield put(researchReset());
      clearLocalStorage();
      yield put(showToast({ message: '세션이 만료되어 로그아웃되었습니다.', isShow: true, status: 'warning', duration: 5000 }));
    }
    console.error(e);
  }
}

export function* authSaga() {
  yield takeEvery(loginAction, loginSaga);
  yield takeEvery(getRefreshToken, getRefreshTokenSaga);
  yield takeEvery(signupAction, signupSaga);
  yield takeEvery(confirmEmailAction, confirmEmailSaga);
  yield takeEvery(resendConfirmEmail, resendConfirmEmailSaga);
}
