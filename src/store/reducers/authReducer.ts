import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthType {
  token: string;
}

const initialState: AuthType = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: state => {
      state.token = '';
    },
  },
});

export const { setToken, resetToken } = authSlice.actions;
export default authSlice.reducer;
