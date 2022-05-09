import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalType {
  isShow: boolean;
  type: string;
}

const initialState = {
  isShow: false,
  type: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isShow: (state, action: PayloadAction<ModalType>) => {
      state.isShow = action.payload.isShow;
      state.type = action.payload.type;
    },
  },
});

export const { isShow } = modalSlice.actions;
export default modalSlice.reducer;
