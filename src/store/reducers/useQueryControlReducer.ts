import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QueryStatusType {
  userInfoQuery: boolean; // userInfo API
  confirmEmailQuery: boolean; // 이메일 확인 API
  teamListQuery: boolean; // 팀 리스트 API
  teamMemberQuery: boolean; // 팀 멤버 API
}

const initialState: QueryStatusType = {
  userInfoQuery: false,
  confirmEmailQuery: false,
  teamListQuery: false,
  teamMemberQuery: false,
};

export const queryStatusSlice = createSlice({
  name: 'queryStatus',
  initialState,
  reducers: {
    updateQueryStatus: (state, action: PayloadAction<any>) => {
      state[action.payload.name] = action.payload.status;
    },
  },
});

export const { updateQueryStatus } = queryStatusSlice.actions;
export default queryStatusSlice.reducer;
