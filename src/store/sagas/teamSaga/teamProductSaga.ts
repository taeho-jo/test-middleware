import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import {
  fetchCreateProductApi,
  fetchDeleteProductAi,
  fetchInviteMemberApi,
  fetchMemberAuthChangeApi,
  fetchMemberListApi,
  fetchMemberRemoveApi,
  fetchProductListApi,
  fetchTeamListApi,
  fetchUpdateProductApi,
} from '../../../api/teamApi';
import {
  changeMemberPowerAction,
  createTeamProduct,
  deleteTeamProduct,
  getError,
  getProductList,
  getProductListSuccess,
  getTeamList,
  getTeamMemberListAction,
  getTeamMemberListActionSuccess,
  inviteTeamMemberEmailAction,
  removeTeamMemberAction,
  updateTeamInfo,
  updateTeamProduct,
} from '../../reducers/teamReducer';
import { showToast } from '../../reducers/toastReducer';
import { isShow } from '../../reducers/modalReducer';
import { getRefreshToken } from '../../reducers/authReducer';

// 팀 조회 saga
function* getTeamListSaga(action) {
  try {
    const result = yield call(fetchTeamListApi);

    if (result?.code === '200') {
      const list = result?.data?.list?.sort((a, b) => {
        return a.teamSeq - b.teamSeq;
      });
      const count = result?.data?.count;
      if (count === 0 || !list || list.length === 0) {
        yield put(updateTeamInfo(null));
        yield put(isShow({ isShow: true, type: 'firstCreateTeam' }));
      }
      // TODO: 살펴볼 필요가 있음
      else {
        yield put(updateTeamInfo(list));
        // if (!selectTeamList) {
        //   yield put(updateSelectTeamList(list[0]));
        // }
        // if (!teamSeq) {
        //   yield put(updateTeamSeq(list[0]?.teamSeq));
        // }
      }
    }
  } catch (e) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getTeamList());
    }
  }
}

// 팀 멤버 조회 saga
function* getTeamMemberListSaga(action) {
  try {
    const response = yield call(fetchMemberListApi, action.payload);

    yield put(getTeamMemberListActionSuccess(response.data));
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getTeamMemberListAction(action.payload));
    }
  }
}

// 팀 멤버 권한 변경 saga
function* changeMemberPowerSaga(action) {
  try {
    const response = yield call(fetchMemberAuthChangeApi, action.payload.teamSeq, action.payload.userId);

    if (response?.code === '201') {
      yield put(showToast({ message: `${response?.message}`, isShow: true, status: 'success', duration: 5000 }));
      yield put(getTeamList());
      yield put(getTeamMemberListAction(action.payload.teamSeq));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(changeMemberPowerAction({ teamSeq: action.payload.teamSeq, userId: action.payload.userId }));
    }
  }
}

// 팀멤버 삭제
function* removeTeamMemberSaga(action) {
  try {
    const response = yield call(fetchMemberRemoveApi, action.payload.teamSeq, action.payload.userId);

    if (response?.code === '201') {
      yield put(showToast({ message: `${response?.message}`, isShow: true, status: 'success', duration: 5000 }));
      yield put(getTeamList());
      yield put(getTeamMemberListAction(action.payload.teamSeq));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(removeTeamMemberAction({ teamSeq: action.payload.teamSeq, userId: action.payload.userId }));
    }
  }
}
// 팀원 이메일 초대
function* inviteTeamMemberEmailSaga(action) {
  try {
    const response = yield call(fetchInviteMemberApi, action.payload);

    if (response?.code === '201') {
      yield put(showToast({ message: `${response?.message}`, isShow: true, status: 'success', duration: 5000 }));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(inviteTeamMemberEmailAction(action.payload));
    }
  }
}

// 팀 프로덕트 조회 saga
function* getProductListSaga(action) {
  try {
    const result = yield call(fetchProductListApi, action.payload.teamSeq);
    if (result.code === '200') {
      yield put(getProductListSuccess(result.data));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(getProductList({ teamSeq: action.payload.teamSeq }));
    }
  }
}

// 팀 프로덕트 생성 saga
function* createTeamProductSaga(action) {
  try {
    const result = yield call(fetchCreateProductApi, action.payload.sendObject, action.payload.teamSeq);

    if (result.code === '200') {
      yield put(showToast({ message: '프로덕트가 생성되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      yield put(isShow({ isShow: false, type: '' }));
      yield put(getProductList({ teamSeq: action.payload.teamSeq }));
    }
  } catch (e: any) {
    console.error(e.response.data);
    showToast({ message: `${e.response.data.message}`, isShow: true, status: 'warning', duration: 5000 });
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(createTeamProduct({ sendObject: action.payload.sendObject, teamSeq: action.payload.teamSeq }));
    }
  }
}

// 팀 프로덕트 수정 saga
function* updateTeamProductSaga(action) {
  try {
    const result = yield call(fetchUpdateProductApi, action.payload.teamSeq, action.payload.productSeq, action.payload.sendObject);

    yield put(showToast({ message: '프로덕트가 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
    yield put(isShow({ isShow: false, type: '' }));
    yield put(getProductList({ teamSeq: action.payload.teamSeq }));
  } catch (e) {
    console.error(e);
    yield put(getError(e));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(updateTeamProduct({ teamSeq: action.payload.teamSeq, productSeq: action.payload.productSeq, sendObject: action.payload.sendObject }));
    }
  }
}

// 팀 프로덕트 삭제 saga
function* deleteTeamProductSaga(action) {
  try {
    const result = yield call(fetchDeleteProductAi, action.payload.teamSeq, action.payload.productSeq);
    if (result.code === '200') {
      yield put(showToast({ message: '프로덕트가 삭제되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      yield put(isShow({ isShow: false, type: '' }));
      action.payload.callback();
    }
  } catch (e: any) {
    console.error(e);
    yield put(getError(e));
    yield put(showToast({ message: `${e?.response?.data?.message}`, isShow: true, status: 'warning', duration: 5000 }));
    if (e?.response?.data?.code === 'E0008') {
      yield put(getRefreshToken());
      yield delay(1000);
      yield put(
        deleteTeamProduct({ teamSeq: action.payload.teamSeq, productSeq: action.payload.productSeq, callback: () => action.payload.callback() }),
      );
    }
  }
}

export function* teamProductSaga() {
  yield takeEvery(getTeamList, getTeamListSaga);
  yield takeEvery(getTeamMemberListAction, getTeamMemberListSaga);
  yield takeEvery(changeMemberPowerAction, changeMemberPowerSaga);
  yield takeEvery(removeTeamMemberAction, removeTeamMemberSaga);
  yield takeEvery(inviteTeamMemberEmailAction, inviteTeamMemberEmailSaga);

  yield takeEvery(getProductList, getProductListSaga);
  yield takeEvery(createTeamProduct, createTeamProductSaga);
  yield takeEvery(updateTeamProduct, updateTeamProductSaga);
  yield takeEvery(deleteTeamProduct, deleteTeamProductSaga);
}
