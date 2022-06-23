import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
  filter: {
    filterFlied: '',
    filterValues: '',
  },
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
  },
});

export const { setReportData, updateFilterFlied, updateFilterValues } = reportSlice.actions;
export default reportSlice.reducer;
