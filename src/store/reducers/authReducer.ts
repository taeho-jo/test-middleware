import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthType {
  token: string;
  email: string;
}

const initialState: AuthType = {
  token: '',
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      console.log(action, 'ACTION');
      state.token = action.payload;
      // state.email = action.payload;
    },
    resetToken: state => {
      console.log('RESET RESET');
      state.token = '';
    },
    test1: (state, action) => {
      // console.log(action, 'asdfasdfasdfasdfasdfasdfasd');
    },
  },
});

export const { setToken, resetToken, test1 } = authSlice.actions;
export default authSlice.reducer;
