import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
  filter: {
    filterFlied: null,
    filterValues: null,
    filterFail: null,
  },
  reportViewId: null,
  rawData: null,
  commentData: null,
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
    updateReportViewId: (state, action) => {
      state.reportViewId = action.payload;
    },
    updateRawData: (state, action) => {
      state.rawData = action.payload;
    },
    updateCommentData: (state, action) => {
      state.commentData = action.payload;
    },
  },
});

export const { setReportData, updateFilterFlied, updateFilterValues, updateFilterFail, updateReportViewId, updateRawData, updateCommentData } =
  reportSlice.actions;
export default reportSlice.reducer;
