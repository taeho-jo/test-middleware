import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmailConfirm: (state, action: PayloadAction<boolean>) => {
      console.log('setEmailConfirm 실행');
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
  },
});

export const { setUserInfo, setEmailConfirm, removeUserInfo, setSelectTeamMember } = userSlice.actions;
export default userSlice.reducer;
