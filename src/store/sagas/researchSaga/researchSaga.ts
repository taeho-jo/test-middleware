import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import {
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  fetchResearchDelete,
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
  fetchDeleteTeamResearchApi,
  fetchGetResearchDetailInfoApi,
  fetchGetResearchListApi,
  fetchModifyTeamResearchApi,
  fetchRecommendationQuestionApi,
  sendRecommendationQuestionListApi,
} from '../../../api/researchApi';
import { isShow } from '../../reducers/modalReducer';
import { showToast } from '../../reducers/toastReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getCommonCode, setRedirectPath } from '../../reducers/commonReducer';
import {
  getRecommendationApiError,
  getRecommendationDataAction,
  getRecommendationDataActionSuccess,
  sendRecommendationQuestionListAction,
  sendRecommendationQuestionListActionSuccess,
} from '../../reducers/researchRecommendationReducer';
import { Cookies } from 'react-cookie';

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
    if (action.payload.step !== 'last' && action.payload.step !== 'change' && action.payload.step !== 'debounce') {
      yield put(setStep(action.payload.step));
    }

    yield put(fetchResearchModifyInfoSuccess(result.data));
    if (action.payload.step === 'last') {
      yield put(isShow({ isShow: true, type: 'researchStatusChangeModal' }));
      action.payload?.callback?.push(`/admin/team`);
      if (action.payload?.callback) {
        yield put(showToast({ message: '리서치 설계요청이 완료되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      }
    }
    if (action.payload.step === 'change') {
      action.payload?.callback?.push(`/admin/team`);
      yield put(showToast({ message: '리서치 변경 사항이 저장되었습니다.', isShow: true, status: 'success', duration: 5000 }));
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

// 리서치 삭제 saga
function* fetchDeleteResearchSaga(action) {
  try {
    const result = yield call(fetchDeleteTeamResearchApi, action.payload.teamSeq, action.payload.researchSeq);
    if (result.code === '201') {
      yield put(isShow({ isShow: false, type: '' }));
      yield put(showToast({ message: '리서치 삭제가 완료되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      const params = { teamSeq: action.payload.teamSeq, researchNm: '', researchType: '', statusType: '' };
      yield put(fetchResearchList({ params }));
    }
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(fetchResearchDelete({ teamSeq: action.payload.teamSeq, researchSeq: action.payload.researchSeq }));
    }
    yield put(getResearchApiError(e));
  }
}

// 리서치 추천 문항 조회 saga
function* fetchGetRecommendationQuestionSaga(action) {
  try {
    const result = yield call(fetchRecommendationQuestionApi);
    if (result?.code === '200') {
      yield put(getRecommendationDataActionSuccess(result?.data?.list));
    }
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getRecommendationDataAction());
    }
    yield put(getRecommendationApiError(e));
  }
}

// 리서치 추천 문항 결과 제출 saga
function* sendRecommendationQuestionListSaga(action) {
  try {
    const result = yield call(sendRecommendationQuestionListApi, action.payload.sendObject);

    if (result.code === '201') {
      const cookies = new Cookies();
      yield put(showToast({ message: '리서치 추천이 완료되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      yield put(sendRecommendationQuestionListActionSuccess(result.data));

      const expires = new Date();
      expires.setDate(expires.getDate() + 1);
      cookies.set(`recommendResultSeq`, result.data.recommendResultSeq, { path: '/', expires });
      cookies.set(`recommendResearchType`, result.data.recommendResearchType, { path: '/', expires });

      action.payload.callback.push('/admin/research/recommendation/result');
      yield put(setRedirectPath('/admin/research/create'));
    }
  } catch (e) {
    console.error(e);
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getRecommendationDataAction());
    }
    yield put(getRecommendationApiError(e));
  }
}

export function* researchSaga() {
  yield takeEvery(fetchResearchList, fetchResearchListSaga);
  yield takeEvery(fetchResearchDetail, fetchGetResearchDetailInfo);
  yield takeEvery(fetchResearchBasicInfo, fetchCreateTeamResearchSaga);
  yield takeEvery(fetchResearchModifyInfo, fetchModifyResearchSaga);
  yield takeEvery(fetchResearchDelete, fetchDeleteResearchSaga);
  yield takeEvery(getRecommendationDataAction, fetchGetRecommendationQuestionSaga);
  yield takeEvery(sendRecommendationQuestionListAction, sendRecommendationQuestionListSaga);
}
