import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import {
  confirmEmailAction,
  getRefreshToken,
  getRefreshTokenSuccess,
  loginAction,
  resendConfirmEmail,
  setToken,
  signupAction,
} from '../../reducers/authReducer';
import { fetchEmailConfirmApi, fetchEmailResendApi, fetchLoginApi, fetchRefreshToken, fetchSignupApi } from '../../../api/authApi';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { showToast } from '../../reducers/toastReducer';
import { isShow } from '../../reducers/modalReducer';
import { getUserInfo, updateCancelWithdrawal } from '../../reducers/userReducer';

// 로그인
function* loginSaga(action) {
  try {
    const response = yield call(fetchLoginApi, action.payload);
    console.log(response);
    if (response?.code === '200') {
      localStorage.setItem('accessToken', response.data.token);
      yield put(setToken(response.data.token));
      yield put(showToast({ message: response.message, isShow: true, status: 'success', duration: 5000 }));
      yield put(getUserInfo());
    }
  } catch (e: any) {
    console.error(e);
    const { data } = e?.response;
    yield put(showToast({ message: `${data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
    if (data.code === 'E0022') {
      yield put(isShow({ isShow: true, type: 'cancelWithdrawalModal' }));
      yield put(updateCancelWithdrawal(true));
    }
  }
}

// 회원가입
function* signupSaga(action) {
  try {
    console.log(action);
    const response = yield call(fetchSignupApi, action.payload);
    console.log(response);
    if (response.code === '201') {
      yield put(showToast({ message: `${response?.message}`, isShow: true, status: 'success', duration: 5000 }));
      // yield put(isShow({ isShow: true, type: 'confirmSignup' }));
    }
  } catch (e) {
    console.error(e);
    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
  }
}
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3RhbmcxMzVAbmF2ZXIuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDc4MTA1NX0.yJSdtjJKuHbguT4RprMHAxVMAh_7bVHKcbuShYLvCeM;
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3RhbmcxMzVAbmF2ZXIuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDc3OTk0Mn0.jawhK_dM4xHYAAJevZ1LDQf1mP5sTH9WZ9t0YVF4gR8

// 이메일 인증
function* confirmEmailSaga(action) {
  try {
    const response = yield call(fetchEmailConfirmApi);
    console.log(response, 'ㅇㅣ메일 컨펌');
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
    console.log(response, 'resend');
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
      clearLocalStorage();
      window.location.href = 'https://stag.diby.io';
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
