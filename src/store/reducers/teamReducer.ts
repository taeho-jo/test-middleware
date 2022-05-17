import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TeamListType {
  teamName: string;
  memberList: string[];
}

export interface TeamType {
  isFirstCreate: boolean;
  isInviteModal: boolean;
  teamList: TeamListType[] | null;
}

const initialState: TeamType = {
  isFirstCreate: false,
  isInviteModal: false,
  teamList: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateTeamInfo: (state, action: PayloadAction<TeamListType[] | null>) => {
      if (action.payload === null) {
        state.teamList = null;
      } else {
        state.teamList = action.payload;
      }
    },
  },
});

export const { updateTeamInfo } = teamSlice.actions;
export default teamSlice.reducer;
