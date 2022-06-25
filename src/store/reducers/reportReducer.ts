import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
  filter: {
    filterFlied: null,
    filterValues: null,
    filterFail: null,
  },
  rawData: null,
};

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportData: (state, action) => {
      state.data = action.payload;
    },
    updateFilterFlied: (state, action) => {
      state.filter.filterFlied = action.payload;
    },
    updateFilterValues: (state, action) => {
      state.filter.filterValues = action.payload;
    },
    updateFilterFail: (state, action) => {
      state.filter.filterFail = action.payload;
    },
    updateRawData: (state, action) => {
      state.rawData = action.payload;
    },
  },
});

export const { setReportData, updateFilterFlied, updateFilterValues, updateFilterFail, updateRawData } = reportSlice.actions;
export default reportSlice.reducer;
