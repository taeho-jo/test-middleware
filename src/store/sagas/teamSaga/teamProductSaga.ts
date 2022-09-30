import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { fetchCreateProductApi, fetchDeleteProductAi, fetchProductListApi, fetchTeamListApi, fetchUpdateProductApi } from '../../../api/teamApi';
import {
  createTeamProduct,
  deleteTeamProduct,
  getProductList,
  getError,
  getProductListSuccess,
  updateTeamProduct,
  getTeamList,
  updateTeamInfo,
  updateSelectTeamList,
  updateTeamSeq,
} from '../../reducers/teamReducer';
import { showToast } from '../../reducers/toastReducer';
import { isShow } from '../../reducers/modalReducer';
import { getRefreshToken } from '../../reducers/authReducer';
import { getCommonCode } from '../../reducers/commonReducer';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../reducers';
import { fetchResearchList } from '../../reducers/researchCreateReducer';

// 팀 조회 saga
function* getTeamListSaga(action) {
  try {
    const { teamNm, teamMember, selectTeamList, teamSeq } = action;
    const result = yield call(fetchTeamListApi);
    console.log(result, '!!!!!!!');
    if (result?.code === '200') {
      const list = result?.data?.list;
      const count = result?.data?.count;
      if (count === 0) {
        yield put(
          updateTeamInfo([
            {
              teamSeq: null,
              teamNm,
              teamMember,
              createDt: null,
            },
          ]),
        );
        yield put(isShow({ isShow: true, type: 'firstCreateTeam' }));
      } else {
        localStorage.setItem('teamSeq', list[0]?.teamSeq);
        localStorage.setItem('selectTeamList', JSON.stringify(list[0]));

        yield put(updateTeamInfo(list));
        if (selectTeamList === null) {
          yield put(updateSelectTeamList(list[0]));
        }
        if (teamSeq !== null) {
          yield put(updateTeamSeq(list[0]?.teamSeq));
        }
        // const params = {
        //   teamSeq: teamSeq ? teamSeq : list[0]?.teamSeq,
        //   searchText: '',
        //   researchType: '',
        //   statusType: '',
        // };
        // console.log(params);
        // yield put(fetchResearchList(params));
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
    yield put(getError(e));
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
  }
}

export function* teamProductSaga() {
  yield takeEvery(getTeamList, getTeamListSaga);
  yield takeEvery(getProductList, getProductListSaga);
  yield takeEvery(createTeamProduct, createTeamProductSaga);
  yield takeEvery(updateTeamProduct, updateTeamProductSaga);
  yield takeEvery(deleteTeamProduct, deleteTeamProductSaga);
}
