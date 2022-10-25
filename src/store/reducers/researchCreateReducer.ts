import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  step: string;
  data: any;
  detailData: any;
  loading: boolean;
  researchList: any;
  researchBasicInfo: {
    researchNm: string;
    researchType: string;
    teamSeq: string;
    productSeq: string;
  };
  researchModifyInfo: {
    researchSeq: string;
    researchNm: string;
    researchType: string;
    teamSeq: string;
    productSeq: string;
    respondentInfo: { panel: string }[] | null;
    goalInfo: { goal: string }[] | null;
    detailDesignInfo: { mission: string }[] | { agenda: string }[] | { hypothesis: string; hypothesisReason: string }[] | null;
    additionalInfo: { additional: string }[] | null;
    statusType: string;
  };
  researchDeleteInfo: {
    teamSeq: string | null;
    researchSeq: string | null;
  };
  researchStepOneData: any;
  recommendationStep: string;
  error: any;
}

const initialState: initialStateType = {
  step: 'step1',
  data: null,
  detailData: null,
  loading: false,
  researchList: null,
  researchBasicInfo: {
    researchNm: '',
    researchType: '',
    teamSeq: null,
    productSeq: null,
  },
  researchModifyInfo: {
    researchSeq: '',
    researchNm: '',
    researchType: '',
    teamSeq: '',
    productSeq: '',
    respondentInfo: [],
    goalInfo: [],
    detailDesignInfo: [],
    additionalInfo: [],
    statusType: '',
  },
  researchDeleteInfo: {
    teamSeq: null,
    researchSeq: null,
  },
  researchStepOneData: null,
  recommendationStep: 'step1',
  error: null,
};

export const researchCreateSlice = createSlice({
  name: 'researchCreate',
  initialState,
  reducers: {
    // 생성 단계
    setStep: (state, action: PayloadAction<string>) => {
      state.step = action.payload;
    },
    // 리서치 목록 조회
    fetchResearchList: (state, action: PayloadAction<any>) => {
      return state;
    },
    fetchResearchListSuccess: (state, action: PayloadAction<any>) => {
      state.researchList = action.payload;
    },
    // 리서치 상세
    fetchResearchDetail: (state, action: PayloadAction<any>) => {
      return state;
    },
    fetchResearchDetailSuccess: (state, action: PayloadAction<any>) => {
      state.detailData = action.payload;
    },
    // 리서치 기본정보 업데이트
    updateResearchBasicInfo: (state, action) => {
      state.researchBasicInfo = { ...state.researchBasicInfo, [action.payload.name]: action.payload.value };
    },
    // 리서치 수정 정보 업데이트
    updateResearchModifyInfo: (state, action) => {
      state.researchModifyInfo = { ...state.researchModifyInfo, [action.payload.name]: action.payload.value };
    },
    updateResearchModifyArrayInfo: (state, action) => {
      state.researchModifyInfo = {
        ...state.researchModifyInfo,
        [action.payload.name]: [state.researchModifyInfo.respondentInfo, action.payload.value],
      };
    },
    // 리서치 최초 생성
    fetchResearchBasicInfo: (state, action: PayloadAction<any>) => {
      return state;
    },
    fetchResearchBasicInfoSuccess: (state, action: PayloadAction<any>) => {
      state.researchStepOneData = action.payload;
    },
    // 리서치 추가 정보 입력 및 수정
    fetchResearchModifyInfo: (state, action: PayloadAction<any>) => {
      return state;
    },
    fetchResearchModifyInfoSuccess: (state, action: PayloadAction<any>) => {
      state.detailData = action.payload;
    },
    // 리서치 삭제 정보
    updateDeleteResearchInfo: (state, action: PayloadAction<any>) => {
      state.researchDeleteInfo = action.payload;
    },
    // 리서치 삭제 api Action
    fetchResearchDelete: (state, action: PayloadAction<any>) => {
      return state;
    },
    // 리서치 추천 스텝 변경
    updateRecommendationStep: (state, action: PayloadAction<string>) => {
      state.recommendationStep = action.payload;
    },

    // RESET
    resetCreateResearchData: state => {
      state.step = 'step1';
      state.loading = false;
      state.researchStepOneData = null;
      state.detailData = null;
      state.researchBasicInfo = {
        researchNm: '',
        researchType: '',
        teamSeq: null,
        productSeq: null,
      };
      state.researchModifyInfo = {
        researchSeq: '',
        researchNm: '',
        researchType: '',
        teamSeq: '',
        productSeq: '',
        respondentInfo: null,
        goalInfo: null,
        detailDesignInfo: null,
        additionalInfo: null,
        statusType: '',
      };
      state.researchDeleteInfo = {
        teamSeq: null,
        researchSeq: null,
      };
    },
    // 에러 처리
    getResearchApiError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    researchReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setStep,
  fetchResearchList,
  fetchResearchListSuccess,
  fetchResearchDetail,
  fetchResearchDetailSuccess,
  updateResearchBasicInfo,
  updateResearchModifyInfo,
  updateResearchModifyArrayInfo,
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  fetchResearchModifyInfo,
  fetchResearchModifyInfoSuccess,
  fetchResearchDelete,
  getResearchApiError,
  updateRecommendationStep,
  resetCreateResearchData,
  updateDeleteResearchInfo,
  researchReset,
} = researchCreateSlice.actions;
export default researchCreateSlice.reducer;
