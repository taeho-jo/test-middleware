import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { decrementByAmount, increment, incrementByAmount } from '../../reducers/counterReducer';

function* incrementSaga() {
  try {
    yield call(increment);
    // yield delay(5000);
    yield put(incrementByAmount(10));
    // yield delay(2000);
    yield put(decrementByAmount(100));
  } catch (e: any) {
    console.error(e);
  }
}

export function* testSaga() {
  yield takeEvery(increment, incrementSaga);
}
