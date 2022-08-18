import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterType {
  commonCode: any;
  indicator: {
    share: string;
    graph: string;
    originData: string;
    filter: string;
  };
}

const initialState: CounterType = {
  commonCode: [],
  indicator: {
    share: 'N',
    graph: 'N',
    originData: 'N',
    filter: 'N',
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
        share: 'N',
        graph: 'N',
        originData: 'N',
        filter: 'N',
      };
    },
  },
});

export const { updateCommonCode, updateInitIndicator, updateIndicatorStatus, resetIndicatorStatus } = commonSlice.actions;
export default commonSlice.reducer;
