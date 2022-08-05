import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
  filter: {
    filterFlied: null,
    filterValues: null,
    filterFail: null,
  },
  projectName: null,
  reportViewId: null,
  rawData: null,
  commentData: null,
  indexId: 'one',
  clickIndexId: '',
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
    updateProjectName: (state, action) => {
      state.projectName = action.payload;
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
    updateIndexId: (state, action) => {
      state.indexId = action.payload;
    },
    updateClickIndexId: (state, action) => {
      state.clickIndexId = action.payload;
    },
  },
});

export const {
  setReportData,
  updateFilterFlied,
  updateFilterValues,
  updateFilterFail,
  updateProjectName,
  updateReportViewId,
  updateRawData,
  updateCommentData,
  updateIndexId,
  updateClickIndexId,
} = reportSlice.actions;
export default reportSlice.reducer;
