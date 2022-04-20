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
    // showToast: (state, action: PayloadAction<ToastType>) => {
    //   state.toastArr.push({ ...action.payload, id: uuid_v4() });
    // },
    // removeToast: (state, action: PayloadAction<string>) => {
    //   const otherArr = state.toastArr.filter(el => el.id !== action.payload);
    //   state.toastArr = otherArr;
    // },
  },
});

export const { isShow } = modalSlice.actions;
export default modalSlice.reducer;
