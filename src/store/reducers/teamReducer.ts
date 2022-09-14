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
  sidebarTeamProductInfo: TeamProductType[] | null;
  // Saga Redux Type
  teamProductList: TeamProductType[];
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
  teamProductList: [],
  loading: false,
  error: null,
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
    updateSidebarTeamProductInfo: (state, action: PayloadAction<TeamProductType[]>) => {
      state.sidebarTeamProductInfo = action.payload;
    },
    // Saga Redux Reducer
    getProductList: (state, action: PayloadAction<{ teamSeq: string }>) => {
      return state;
    },
    getProductListSuccess: (state, action: PayloadAction<TeamProductType[]>) => {
      state.teamProductList = action.payload;
    },
    getProductListError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    // Saga Redux
    createTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
    },
    updateTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
    },
    deleteTeamProduct: (state, action: PayloadAction<any>) => {
      return state;
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
  getProductList,
  getProductListSuccess,
  getProductListError,
  createTeamProduct,
  updateTeamProduct,
  deleteTeamProduct,
} = teamSlice.actions;
export default teamSlice.reducer;
