import { call, put, takeEvery } from '@redux-saga/core/effects';
import { fetchCreateProductApi, fetchDeleteProductAi, fetchProductListApi, fetchUpdateProductApi } from '../../../api/teamApi';
import {
  createTeamProduct,
  deleteTeamProduct,
  getProductList,
  getProductListError,
  getProductListSuccess,
  updateTeamProduct,
} from '../../reducers/teamReducer';
import { showToast } from '../../reducers/toastReducer';
import { isShow } from '../../reducers/modalReducer';

// 팀 프로덕트 조회 saga
function* getProductListSaga(action) {
  try {
    const result = yield call(fetchProductListApi, action.payload.teamSeq);
    if (result.code === '200') {
      yield put(getProductListSuccess(result.data));
    }
  } catch (e: any) {
    console.error(e);
    yield put(getProductListError(e));
  }
}

// 팀 프로덕트 생성 saga
function* createTeamProductSaga(action) {
  try {
    const result = yield call(fetchCreateProductApi, action.payload.sendObject, action.payload.teamSeq);
    console.log(action);
    console.log(result);
    if (result.code === '200') {
      yield put(showToast({ message: '프로덕트가 생성되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      yield put(isShow({ isShow: false, type: '' }));
      yield put(getProductList({ teamSeq: action.payload.teamSeq }));
    }
  } catch (e: any) {
    console.error(e.response.data);
    showToast({ message: `${e.response.data.message}`, isShow: true, status: 'warning', duration: 5000 });
    yield put(getProductListError(e));
  }
}

// 팀 프로덕트 수정 saga
function* updateTeamProductSaga(action) {
  try {
    const result = yield call(fetchUpdateProductApi, action.payload.teamSeq, action.payload.productSeq, action.payload.sendObject);
    console.log(result);
    yield put(showToast({ message: '프로덕트가 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
    yield put(isShow({ isShow: false, type: '' }));
    yield put(getProductList({ teamSeq: action.payload.teamSeq }));
  } catch (e) {
    console.error(e);
    yield put(getProductListError(e));
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
    yield put(getProductListError(e));
  }
}

export function* teamProductSaga() {
  yield takeEvery(getProductList, getProductListSaga);
  yield takeEvery(createTeamProduct, createTeamProductSaga);
  yield takeEvery(updateTeamProduct, updateTeamProductSaga);
  yield takeEvery(deleteTeamProduct, deleteTeamProductSaga);
}
