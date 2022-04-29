import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TeamType {
  isFirstCreate: boolean;
  isInviteModal: boolean;
}

const initialState: TeamType = {
  isFirstCreate: false,
  isInviteModal: false,
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    created: (state, action: PayloadAction<boolean>) => {
      console.log(action, 'ACTION');
      state.isFirstCreate = action.payload;
    },
    toggleInviteModal: (state, action: PayloadAction<boolean>) => {
      state.isInviteModal = action.payload;
    },
  },
});

export const { created, toggleInviteModal } = teamSlice.actions;
export default teamSlice.reducer;
