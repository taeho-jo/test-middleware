import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterType {
  commonCode: any;
  indicator: {
    isShare: string;
    graph: string;
    originData: string;
    isFilter: string;
  };
  error: any;
}

const initialState: CounterType = {
  commonCode: [],
  indicator: {
    isShare: 'N',
    graph: 'N',
    originData: 'N',
    isFilter: 'N',
  },
  error: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    getCommonCode: state => {
      return state;
    },
    updateCommonCode: (state, action: PayloadAction<any>) => {
      state.commonCode = action.payload;
    },
    updateInitIndicator: (state, action: PayloadAction<any>) => {
      state.indicator = action.payload;
    },
    updateIndicatorStatus: (state, action: PayloadAction<any>) => {
      state.indicator[action.payload.key] = action.payload.value;
    },
    resetIndicatorStatus: state => {
      state.indicator = {
        isShare: 'N',
        graph: 'N',
        originData: 'N',
        isFilter: 'N',
      };
    },
    getErrorInfo: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { getCommonCode, updateCommonCode, updateInitIndicator, updateIndicatorStatus, resetIndicatorStatus, getErrorInfo } =
  commonSlice.actions;
export default commonSlice.reducer;
