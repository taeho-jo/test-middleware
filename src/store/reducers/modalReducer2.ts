import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Modal2Type {
  isShow: boolean;
}

const initialState = {
  isShow: false,
};

export const modalSlice2 = createSlice({
  name: 'modal2',
  initialState,
  reducers: {
    isShow: (state, action: PayloadAction<Modal2Type>) => {
      state.isShow = action.payload.isShow;
    },
  },
});

export const { isShow } = modalSlice2.actions;
export default modalSlice2.reducer;
