import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterType {
  commonCode: any;
}

const initialState: CounterType = {
  commonCode: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateCommonCode: (state, action: PayloadAction<any>) => {
      state.commonCode = action.payload;
    },
  },
});

export const { updateCommonCode } = commonSlice.actions;
export default commonSlice.reducer;
