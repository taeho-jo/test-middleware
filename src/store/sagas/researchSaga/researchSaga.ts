import { call, put, takeEvery } from '@redux-saga/core/effects';
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

// 팀 리서치 목록 조회 saga
function* fetchResearchListSaga(action) {
  try {
    const { params } = action.payload;
    console.log(action);
    const result = yield call(fetchGetResearchListApi, params);
    if (result.code === '200') {
      yield put(fetchResearchListSuccess(result.data.list));
    }
  } catch (e) {
    console.error(e);
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
    yield put(getResearchApiError(e));
  }
}

// 팀 리서치 생성 saga
function* fetchCreateTeamResearchSaga(action) {
  try {
    console.log(action, '!!!!!!!!!!ACTION');
    const { params, step, callback } = action.payload;
    const result = yield call(fetchCreateTeamResearchApi, params);
    console.log(result);
    yield put(setStep(step));
    yield put(fetchResearchBasicInfoSuccess(result));
    callback.push(`/admin/research/${result.data.researchSeq}`);
  } catch (e: any) {
    console.error(e);
    yield put(getResearchApiError(e));
  }
}

// 팀 리서치 수정 saga
function* fetchModifyResearchSaga(action) {
  try {
    const result = yield call(fetchModifyTeamResearchApi, action.payload.sendObject);
    console.log(result);
    yield put(setStep(action.payload.step));
    yield put(fetchResearchModifyInfoSuccess(result.data));
  } catch (e) {
    console.error(e);
    yield put(getResearchApiError(e));
  }
}

export function* researchSaga() {
  yield takeEvery(fetchResearchList, fetchResearchListSaga);
  yield takeEvery(fetchResearchDetail, fetchGetResearchDetailInfo);
  yield takeEvery(fetchResearchBasicInfo, fetchCreateTeamResearchSaga);
  yield takeEvery(fetchResearchModifyInfo, fetchModifyResearchSaga);
}
