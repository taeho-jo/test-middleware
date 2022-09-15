import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getRefreshToken, getRefreshTokenSuccess } from '../../reducers/authReducer';
import { fetchRefreshToken } from '../../../api/authApi';

function* getRefreshTokenSaga(action) {
  try {
    const result = yield call(fetchRefreshToken);
    if (result.code === '200') {
      const token = result?.data?.token;
      localStorage.setItem('accessToken', token);
      yield put(getRefreshTokenSuccess(token));
    }
  } catch (e: any) {
    console.error(e);
  }
}

export function* authSaga() {
  yield takeEvery(getRefreshToken, getRefreshTokenSaga);
}

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4b2RkbDEzNUBuYXRlLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE2NjMxOTk5NjJ9.GadgeNAo2NuOhwYOhQwQWHN2M3MVumEm2k0HJu55bI4
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4b2RkbDEzNUBuYXRlLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE2NjMyMDA1NzN9.tuWzL8-9mxwJNUukNLJ0_2tssz6lPrSugG7dsEyxVm0
