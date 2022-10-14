import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PURGE} from "redux-persist";

export interface AuthType {
  accessToken: string;
  email: string;
  isRefreshToken: boolean;
  loginType: string;
  // userInfo: {};
}

const initialState: AuthType = {
  accessToken: '',
  email: '',
  isRefreshToken: false,
  loginType: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
      // state.email = action.payload;
    },
    resetToken: state => {
      state.accessToken = '';
    },
    updateIsRefreshTokenStatus: (state, action) => {
      state.isRefreshToken = action.payload;
    },
    updateLoginType: (state, action: PayloadAction<string>) => {
      state.loginType = action.payload;
    },
    resetLoginType: state => {
      state.loginType = '';
    },
    // Saga Redux
    loginAction: (state, action) => {
      return state;
    },
    loginActionSuccess: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    signupAction: (state, action) => {
      return state;
    },
    confirmEmailAction: state => {
      return state;
    },
    resendConfirmEmail: (state, action) => {
      return state;
    },
    getRefreshToken: state => {
      return state;
    },
    getRefreshTokenSuccess: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
    },
    authReset(state) {
      Object.assign(state, initialState)
    },
  },
});

export const {
  setToken,
  resetToken,
  updateIsRefreshTokenStatus,
  updateLoginType,
  resetLoginType,
  // Saga Redux
  loginAction,
  loginActionSuccess,
  signupAction,
  confirmEmailAction,
  resendConfirmEmail,
  getRefreshToken,
  getRefreshTokenSuccess,
  authReset
} = authSlice.actions;
export default authSlice.reducer;
