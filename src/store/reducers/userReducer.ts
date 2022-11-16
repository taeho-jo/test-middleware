import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

export interface UserInfoType {
  authTokenProvider: string | null;
  authTypeCd?: string | null;
  consentToUseMarketingYn: string | null;
  cpPostion: string | null;
  cpSize: string | null;
  cxResearch: string | null;
  emailVerifiedYn: string | null;
  firstTimeYn: string | null;
  funnelsCd: string | null;
  privacyConsentYn: string | null;
  purposeOfUse: string | null;
  userId: string | null;
  userName: string | null;
  userSeq: string | null;
}

export interface UserType {
  userInfo: UserInfoType;
  emailConfirm: boolean;
  teamMemberInfo: {
    joinDate: string;
    teamRoleType: string;
    teamSeq: number | null;
    userId: string;
    userName: string;
  };
  cancelWithdrawal: boolean;
  errorMessage: string | string[];
  withdrawalUserInfo: {
    userId: string;
    password: string;
  };
}

const initialState: UserType = {
  userInfo: {
    authTokenProvider: '',
    authTypeCd: '',
    consentToUseMarketingYn: '',
    cpPostion: '',
    cpSize: '',
    cxResearch: '',
    emailVerifiedYn: '',
    firstTimeYn: '',
    funnelsCd: '',
    privacyConsentYn: '',
    purposeOfUse: '',
    userId: '',
    userName: '',
    userSeq: '',
  },
  emailConfirm: false,
  teamMemberInfo: {
    joinDate: '',
    teamRoleType: '',
    teamSeq: null,
    userId: '',
    userName: '',
  },
  cancelWithdrawal: false,
  errorMessage: '',
  withdrawalUserInfo: {
    userId: '',
    password: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmailConfirm: (state, action: PayloadAction<boolean>) => {
      state.emailConfirm = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    removeUserInfo: state => {
      state.userInfo = {
        authTokenProvider: '',
        authTypeCd: '',
        consentToUseMarketingYn: '',
        cpPostion: '',
        cpSize: '',
        cxResearch: '',
        emailVerifiedYn: '',
        firstTimeYn: '',
        funnelsCd: '',
        privacyConsentYn: '',
        purposeOfUse: '',
        userId: '',
        userName: '',
        userSeq: '',
      };
    },
    setSelectTeamMember: (state, action: PayloadAction<any>) => {
      state.teamMemberInfo = action.payload;
    },
    updateCancelWithdrawal: (state, action: PayloadAction<boolean>) => {
      state.cancelWithdrawal = action.payload;
    },
    updateErrorMessage: (state, action: PayloadAction<string | string[]>) => {
      state.errorMessage = action.payload;
    },
    updateWithdrawalUserInfo: (state, action) => {
      state.withdrawalUserInfo = action.payload;
    },
    // Saga Redux
    getUserInfo: (state, action) => {
      return state;
    },
    getUserInfoSuccess: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    userReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setUserInfo,
  setEmailConfirm,
  removeUserInfo,
  setSelectTeamMember,
  updateCancelWithdrawal,
  updateErrorMessage,
  updateWithdrawalUserInfo,
  // Saga Redux
  getUserInfo,
  getUserInfoSuccess,
  userReset,
} = userSlice.actions;
export default userSlice.reducer;
