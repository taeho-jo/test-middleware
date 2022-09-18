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
    panelInfo: { panel: string }[] | null;
    decisionInfo: { decision: string }[] | null;
    detailInfo: { mission: string }[] | { agenda: string }[] | { hypothesis: string; hypothesisReason: string }[] | null;
    additionalInfo: { additional: string }[] | null;
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
  researchModifyInfo: {
    researchSeq: '',
    researchNm: '',
    researchType: '',
    teamSeq: '',
    productSeq: '',
    panelInfo: [],
    decisionInfo: [],
    detailInfo: [],
    additionalInfo: [],
    statusType: '',
  },
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
    // 리서치 수정 정보 업데이트
    updateResearchModifyInfo: (state, action) => {
      state.researchModifyInfo = { ...state.researchModifyInfo, [action.payload.name]: action.payload.value };
    },
    updateResearchModifyArrayInfo: (state, action) => {
      state.researchModifyInfo = { ...state.researchModifyInfo, [action.payload.name]: [state.researchModifyInfo.panelInfo, action.payload.value] };
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
        panelInfo: null,
        decisionInfo: null,
        detailInfo: null,
        additionalInfo: null,
        statusType: '',
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
  updateResearchModifyInfo,
  updateResearchModifyArrayInfo,
  fetchResearchBasicInfo,
  fetchResearchBasicInfoSuccess,
  fetchResearchModifyInfo,
  fetchResearchModifyInfoSuccess,
  getResearchApiError,
  resetCreateResearchData,
} = researchCreateSlice.actions;
export default researchCreateSlice.reducer;
