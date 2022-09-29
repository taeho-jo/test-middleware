import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    getRefreshToken: state => {
      return state;
    },
    getRefreshTokenSuccess: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
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
  getRefreshToken,
  getRefreshTokenSuccess,
} = authSlice.actions;
export default authSlice.reducer;
