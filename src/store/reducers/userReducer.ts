import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
  userInfo: {
    authTokenProvider: string | null;
    authTypeCd: string | null;
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
  };
  setting: boolean;
  emailConfirm: boolean;
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
  setting: false,
  emailConfirm: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmailConfirm: (state, action: PayloadAction<boolean>) => {
      console.log('setEmailConfirm 실행');
      state.emailConfirm = action.payload;
    },
    setSetting: (state, action: PayloadAction<boolean>) => {
      console.log('setSetting 실행');
      state.setting = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo, setSetting, setEmailConfirm } = userSlice.actions;
export default userSlice.reducer;
