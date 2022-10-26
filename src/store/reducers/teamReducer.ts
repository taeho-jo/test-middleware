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
export interface TeamMemberListType {
  count: number;
  list: {
    joinDate: string;
    teamRoleType: string;
    teamSeq: number | null;
    userId: string;
    userName: string;
  }[];
}
export interface TeamType {
  isFirstCreate: boolean;
  isInviteModal: boolean;
  teamList: TeamListType[] | [];
  selectTeamList: TeamListType[] | null;
  selectTeamSeq: number | null;
  selectProduct: TeamProductType | null;
  sidebarTeamProductInfo: TeamProductType[] | null;
  // Saga Redux Type
  teamProductList: {
    list: TeamProductType[];
    count: number;
  };
  teamMemberList: TeamMemberListType;
  loading: boolean;
  error: any;
}

const initialState: TeamType = {
  isFirstCreate: false,
  isInviteModal: false,
  teamList: null,
  selectTeamList: null,
  selectTeamSeq: null,
  selectProduct: null,
  sidebarTeamProductInfo: null,
  // Saga Redux
  teamProductList: {
    list: [],
    count: 0,
  },
  teamMemberList: {
    count: 0,
    list: [],
  },
  loading: false,
  error: null,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateSelectProductList: (state, action) => {
      state.selectProduct = action.payload;
    },
    updateTeamCreateModal: (state, action) => {
      state.isFirstCreate = action.payload;
    },
    updateSidebarTeamProductInfo: (state, action: PayloadAction<TeamProductType[]>) => {
      state.sidebarTeamProductInfo = action.payload;
    },
    // Saga Redux Reducer
    getTeamList: (state, action) => {
      return state;
    },
    updateSelectTeamList: (state, action) => {
      // const selectedArr = state.teamList.filter(el => el.teamSeq === action.payload);
      state.selectTeamList = action.payload;
    },
    updateTeamInfo: (state, action: PayloadAction<TeamListType[] | []>) => {
      if (action.payload === null) {
        state.teamList = null;
      } else {
        state.teamList = action.payload;
      }
    },
    updateTeamSeq: (state, action: PayloadAction<number | null>) => {
      state.selectTeamSeq = action.payload;
    },
    getProductList: (state, action: PayloadAction<{ teamSeq: string }>) => {
      return state;
    },
    getProductListSuccess: (state, action: PayloadAction<{ list: TeamProductType[]; count: number }>) => {
      state.teamProductList = action.payload;
    },
    getTeamMemberListAction: (state, action) => {
      return state;
    },
    getTeamMemberListActionSuccess: (state, action: PayloadAction<TeamMemberListType>) => {
      state.teamMemberList = action.payload;
    },
    changeMemberPowerAction: (state, action) => {
      return state;
    },
    removeTeamMemberAction: (state, action) => {
      return state;
    },
    inviteTeamMemberEmailAction: (state, action) => {
      return state;
    },
    getError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },

    createTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
    },
    updateTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
    },
    deleteTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
    },
    teamReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  updateTeamInfo,
  updateTeamCreateModal,
  updateSelectProductList,
  updateTeamSeq,
  updateSelectTeamList,
  updateSidebarTeamProductInfo,
  // Saga Redux
  getTeamList,
  getProductList,
  getProductListSuccess,
  getTeamMemberListAction,
  getTeamMemberListActionSuccess,
  changeMemberPowerAction,
  removeTeamMemberAction,
  inviteTeamMemberEmailAction,
  getError,
  createTeamProduct,
  updateTeamProduct,
  deleteTeamProduct,
  teamReset,
} = teamSlice.actions;
export default teamSlice.reducer;
