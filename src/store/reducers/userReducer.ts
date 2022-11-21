import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

export interface UserInfoType {
  consentToUseMarketingDt: string | null;
  consentToUseMarketingYn: string | null;
  cpPositionType: string | null;
  cpSizeType: string | null;
  emailVerifiedYn: string | null;
  firstTimeYn: string | null;
  funnelsType: string | null;
  privacyConsentYn: string | null;
  remainingCredit: number | null;
  userId: string | null;
  userName: string | null;
  userSeq: number | null;
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
    consentToUseMarketingDt: '',
    consentToUseMarketingYn: '',
    cpPositionType: '',
    cpSizeType: '',
    emailVerifiedYn: '',
    firstTimeYn: '',
    funnelsType: '',
    privacyConsentYn: '',
    remainingCredit: null,
    userId: '',
    userName: '',
    userSeq: null,
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
      console.log(action);
      state.userInfo = action.payload;
    },
    removeUserInfo: state => {
      state.userInfo = {
        consentToUseMarketingDt: '',
        consentToUseMarketingYn: '',
        cpPositionType: '',
        cpSizeType: '',
        emailVerifiedYn: '',
        firstTimeYn: '',
        funnelsType: '',
        privacyConsentYn: '',
        remainingCredit: null,
        userId: '',
        userName: '',
        userSeq: null,
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
    getInviteUserInfo: (state, action) => {
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
  getInviteUserInfo,
  getUserInfoSuccess,
  userReset,
} = userSlice.actions;
export default userSlice.reducer;
