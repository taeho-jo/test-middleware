import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid_v4 } from 'uuid';

export interface ToastType {
  id?: string;
  message: string;
  isShow: boolean;
  status: string;
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
      state.toastArr.push({ ...action.payload, id: uuid_v4() });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      const otherArr = state.toastArr.filter(el => el.id !== action.payload);
      state.toastArr = otherArr;
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
