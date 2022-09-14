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
    researchType: string;
    teamSeq: string;
    productSeq: string;
    panelInfo: { panel: string }[];
    decisionInfo: { decision: string }[];
    detailInfo: any | { mission: string }[] | { agenda: string }[] | { hypothesis: string; hypothesisReason: string }[];
    additionalInfo: { additional: string }[];
    statusType: string;
  };
  researchStepOneData: any;
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
  researchModifyInfo: null,
  researchStepOneData: null,
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
    fetchResearchBasicInfo: (state, action: PayloadAction<any>) => {
      return state;
    },
    fetchResearchBasicInfoSuccess: (state, action: PayloadAction<any>) => {
      state.researchStepOneData = action.payload;
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
    },
    // 에러 처리
    getResearchApiError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
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
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  getResearchApiError,
  resetCreateResearchData,
} = researchCreateSlice.actions;
export default researchCreateSlice.reducer;
