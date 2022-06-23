import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setReportData } = reportSlice.actions;
export default reportSlice.reducer;
