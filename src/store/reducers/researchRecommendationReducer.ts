import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { action } from '@storybook/addon-actions';
import { RecommendationQuestionListType } from '../../api/researchApi/types';

interface initialStateType {
  recommendationData: RecommendationQuestionListType[];
  error: any;
}

const initialState: initialStateType = {
  recommendationData: [],
  error: null,
};

export const researchRecommendationSlice = createSlice({
  name: 'researchRecommendation',
  initialState,
  reducers: {
    // 리서치 추천 문항 받아오기
    getRecommendationDataAction: state => {
      // state.recommendationData = action.payload;
      return state;
    },
    getRecommendationDataActionSuccess: (state, action: PayloadAction<RecommendationQuestionListType[]>) => {
      state.recommendationData = action.payload;
    },
    // 에러 처리
    getRecommendationApiError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { getRecommendationDataAction, getRecommendationDataActionSuccess, getRecommendationApiError } = researchRecommendationSlice.actions;
export default researchRecommendationSlice.reducer;