import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface memberListType {
  joinDate: string;
  teamSeq: number;
  userId: string;
  userName: string;
}
export interface TeamListType {
  teamName: string;
  memberList: memberListType[];
  teamRoleType: string | null;
  teamSeq: number | null;
}
export interface TeamType {
  isFirstCreate: boolean;
  isInviteModal: boolean;
  teamList: TeamListType[] | null;
  selectTeamList: TeamListType[] | null;
  selectTeamSeq: number | null;
}

const initialState: TeamType = {
  isFirstCreate: false,
  isInviteModal: false,
  teamList: null,
  selectTeamList: null,
  selectTeamSeq: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateSelectTeamList: (state, action) => {
      const selectedArr = state.teamList.filter(el => el.teamSeq === action.payload);
      state.selectTeamList = selectedArr;
    },
    updateTeamCreateModal: (state, action) => {
      state.isFirstCreate = action.payload;
    },
    updateTeamInfo: (state, action: PayloadAction<TeamListType[] | null>) => {
      if (action.payload === null) {
        state.teamList = null;
      } else {
        state.teamList = action.payload;
      }
    },
    updateTeamSeq: (state, action: PayloadAction<number | null>) => {
      state.selectTeamSeq = action.payload;
    },
  },
});

export const { updateTeamInfo, updateTeamCreateModal, updateTeamSeq, updateSelectTeamList } = teamSlice.actions;
export default teamSlice.reducer;
