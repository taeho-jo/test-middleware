import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthType {
  accessToken: string;
  email: string;
  // userInfo: {};
}

const initialState: AuthType = {
  accessToken: '',
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      console.log(action, 'ACTION');
      state.accessToken = action.payload;
      // state.email = action.payload;
    },
    resetToken: state => {
      console.log('RESET RESET');
      state.accessToken = '';
    },
    test1: (state, action) => {
      // console.log(action, 'asdfasdfasdfasdfasdfasdfasd');
    },
  },
});

export const { setToken, resetToken, test1 } = authSlice.actions;
export default authSlice.reducer;
