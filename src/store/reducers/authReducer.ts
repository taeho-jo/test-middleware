import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthType {
  accessToken: string;
  email: string;
  isRefreshToken: boolean;
  // userInfo: {};
}

const initialState: AuthType = {
  accessToken: '',
  email: '',
  isRefreshToken: false,
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
  },
});

export const { setToken, resetToken, updateIsRefreshTokenStatus } = authSlice.actions;
export default authSlice.reducer;
