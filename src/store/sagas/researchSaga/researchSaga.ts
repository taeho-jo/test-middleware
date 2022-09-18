import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import {
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  fetchResearchDetail,
  fetchResearchDetailSuccess,
  fetchResearchList,
  fetchResearchListSuccess,
  fetchResearchModifyInfo,
  fetchResearchModifyInfoSuccess,
  getResearchApiError,
  setStep,
} from '../../reducers/researchCreateReducer';
import {
  fetchCreateTeamResearchApi,
  fetchGetResearchDetailInfoApi,
  fetchGetResearchListApi,
  fetchModifyTeamResearchApi,
} from '../../../api/researchApi';
import { isShow } from '../../reducers/modalReducer';
import { showToast } from '../../reducers/toastReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getCommonCode } from '../../reducers/commonReducer';

// 팀 리서치 목록 조회 saga
function* fetchResearchListSaga(action) {
  try {
    const { params } = action.payload;

    const result = yield call(fetchGetResearchListApi, params);
    if (result.code === '200') {
      yield put(fetchResearchListSuccess(result.data.list));
    }
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(fetchResearchList({ params: action.payload.params }));
    }
    yield put(getResearchApiError(e));
  }
}

// 팀 리서치 상세 조회 saga
function* fetchGetResearchDetailInfo(action) {
  try {
    const { params } = action.payload;
    const result = yield call(fetchGetResearchDetailInfoApi, params);

    yield put(fetchResearchDetailSuccess(result.data));
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(fetchResearchDetail({ params: action.payload.params }));
    }
    yield put(getResearchApiError(e));
  }
}

// 팀 리서치 생성 saga
function* fetchCreateTeamResearchSaga(action) {
  try {
    const { params, step, callback } = action.payload;
    const result = yield call(fetchCreateTeamResearchApi, params);
    yield put(setStep(step));
    yield put(fetchResearchBasicInfoSuccess(result));
    callback.push(`/admin/research/${result.data.researchSeq}`);
  } catch (e: any) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(fetchResearchBasicInfo({ params: action.payload.params, step: action.payload.step, callback: action.payload.callback }));
    }
    yield put(getResearchApiError(e));
  }
}

// 팀 리서치 수정 saga
function* fetchModifyResearchSaga(action) {
  try {
    const result = yield call(fetchModifyTeamResearchApi, action.payload.sendObject);
    if (action.payload.step !== 'last') {
      yield put(setStep(action.payload.step));
    }

    yield put(fetchResearchModifyInfoSuccess(result.data));
    if (action.payload.step === 'last') {
      yield put(isShow({ isShow: true, type: 'researchStatusChangeModal' }));
      action.payload?.callback?.push(`/admin/team`);
      yield put(showToast({ message: '리서치 설계요청이 완료되었습니다.', isShow: true, status: 'success', duration: 5000 }));
    }
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(fetchResearchModifyInfo({ sendObject: action.payload.sendObject, step: action.payload.step, callback: action.payload.callback }));
    }
    yield put(getResearchApiError(e));
  }
}

export function* researchSaga() {
  yield takeEvery(fetchResearchList, fetchResearchListSaga);
  yield takeEvery(fetchResearchDetail, fetchGetResearchDetailInfo);
  yield takeEvery(fetchResearchBasicInfo, fetchCreateTeamResearchSaga);
  yield takeEvery(fetchResearchModifyInfo, fetchModifyResearchSaga);
}
