import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  fetchResearchDetail,
  fetchResearchDetailSuccess,
  fetchResearchList,
  fetchResearchListSuccess,
  getResearchApiError,
  setStep,
} from '../../reducers/researchCreateReducer';
import { fetchCreateTeamResearchApi, fetchGetResearchDetailInfoApi, fetchGetResearchListApi } from '../../../api/researchApi';

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
  } catch (e) {
    console.error(e);
  }
}

export function* researchSaga() {
  yield takeEvery(fetchResearchList, fetchResearchListSaga);
  yield takeEvery(fetchResearchDetail, fetchGetResearchDetailInfo);
  yield takeEvery(fetchResearchBasicInfo, fetchCreateTeamResearchSaga);
}
