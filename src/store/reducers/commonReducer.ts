import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterType {
  commonCode: any;
  indicator: {
    isShare: string;
    graph: string;
    originData: string;
    isFilter: string;
  };
}

const initialState: CounterType = {
  commonCode: [],
  indicator: {
    isShare: 'N',
    graph: 'N',
    originData: 'N',
    isFilter: 'N',
  },
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
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
  },
});

export const { updateCommonCode, updateInitIndicator, updateIndicatorStatus, resetIndicatorStatus } = commonSlice.actions;
export default commonSlice.reducer;
