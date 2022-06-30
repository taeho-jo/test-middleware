import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface memberListType {
  joinDate: string;
  teamSeq: number;
  userId: string;
  userName: string;
  teamRoleType: string;
}
export interface ProductType {
  planetType: string;
  productNm: string;
  productSeq: number;
  revenueModelType: string;
  serviceType: string;
  teamSeq: number;
}
export interface TeamListType {
  teamNm: string;
  teamMember: memberListType[];
  // teamRoleType: string | null;
  teamSeq: number | null;
  createDt: string | null;
}
export interface TeamProductType {
  planetType: string;
  productNm: string;
  productSeq: number;
  revenueModelType: string;
  serviceType: string;
  teamSeq: number;
}
export interface TeamType {
  isFirstCreate: boolean;
  isInviteModal: boolean;
  teamList: TeamListType[] | null;
  selectTeamList: TeamListType[] | null;
  selectTeamSeq: number | null;
  selectProduct: TeamProductType | null;
}

const initialState: TeamType = {
  isFirstCreate: false,
  isInviteModal: false,
  teamList: null,
  selectTeamList: null,
  selectTeamSeq: null,
  selectProduct: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateSelectTeamList: (state, action) => {
      // const selectedArr = state.teamList.filter(el => el.teamSeq === action.payload);
      state.selectTeamList = action.payload;
    },
    updateSelectProductList: (state, action) => {
      state.selectProduct = action.payload;
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

export const { updateTeamInfo, updateTeamCreateModal, updateSelectProductList, updateTeamSeq, updateSelectTeamList } = teamSlice.actions;
export default teamSlice.reducer;
