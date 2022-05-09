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
      console.log(action, 'ACTION');
      state.token = action.payload;
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
