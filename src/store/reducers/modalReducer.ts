import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalType {
  isShow: boolean;
  type?: string;
  returnPage?: boolean;
}

const initialState = {
  isShow: false,
  type: null,
  returnPage: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isShow: (state, action: PayloadAction<ModalType>) => {
      state.isShow = action.payload.isShow;
      state.type = action.payload.type ? action.payload.type : '';
    },
    updateReturnPage: (state, action) => {
      state.returnPage = action.payload;
    },
  },
});

export const { isShow, updateReturnPage } = modalSlice.actions;
export default modalSlice.reducer;
