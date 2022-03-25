import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToastType {
  message: string;
  isShow: boolean;
  duration?: number;
}

export interface ToastArrType {
  toastArr: ToastType[];
}

const initialState: ToastArrType = {
  toastArr: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastType>) => {
      state.toastArr.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<ToastType>) => {
      state.toastArr.shift();
    },
    remove2Toast: state => {
      state.toastArr.shift();
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
