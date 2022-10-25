import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { colors } from '../../styles/Common.styles';

export interface CounterType {
  commonCode: any;
  indicator: {
    isShare: string;
    graph: string;
    originData: string;
    isFilter: string;
  };
  tooltip: {
    show: boolean;
    title: string;
    content: string;
    top: number;
    left: number;
    backgroundColor: '#68A0F4' | '#3c3c46' | '#24E1D5';
  };
  dialog: {
    show: boolean;
    title: string;
    content: string;
    okButton: string;
    cancelButton: string;
    okButtonColor: string;
    okFunction: any;
  };
  researchRecommendationModalInfo: {
    show: boolean;
    title: string;
    content: string;
    tags: string;
    img: any;
    link: string;
    type: string;
  };
  redirectPath: string;
  error: any;
  loading: {
    [key: string]: boolean;
  };
}

const initialState: CounterType = {
  commonCode: [],
  indicator: {
    isShare: 'N',
    graph: 'N',
    originData: 'N',
    isFilter: 'N',
  },
  tooltip: {
    show: false,
    title: '',
    content: '',
    top: 0,
    left: 0,
    backgroundColor: colors.grey._3c,
  },
  dialog: {
    show: false,
    title: '',
    content: '',
    okButton: '',
    cancelButton: '',
    okButtonColor: '',
    okFunction: null,
  },
  researchRecommendationModalInfo: {
    show: false,
    title: '',
    content: '',
    tags: '',
    img: '',
    link: '',
    type: '',
  },
  redirectPath: null,
  error: null,
  loading: {},
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = { ...state.loading, [action.payload.name]: true };
    },
    stopLoading: state => {
      state.loading = null;
    },
    getCommonCode: state => {
      return state;
    },
    updateCommonCode: (state, action: PayloadAction<any>) => {
      state.commonCode = action.payload;
    },
    updateInitIndicator: (state, action: PayloadAction<any>) => {
      state.indicator = action.payload;
    },
    updateIndicatorStatus: (state, action: PayloadAction<any>) => {
      state.indicator[action.payload.key] = action.payload.value;
    },
    showTooltip: (
      state,
      action: PayloadAction<{ show: boolean; title: string; content: string; top: number; left: number; backgroundColor: '#68A0F4' | '#3c3c46' }>,
    ) => {
      state.tooltip = action.payload;
    },
    closeTooltip: state => {
      state.tooltip = {
        show: false,
        title: '',
        content: '',
        top: 0,
        left: 0,
        backgroundColor: colors.grey._3c,
      };
    },
    showDialog: (
      state,
      action: PayloadAction<{
        show: boolean;
        title: string;
        content: string;
        okButton: string;
        cancelButton: string;
        okButtonColor: string;
        okFunction: any;
      }>,
    ) => {
      state.dialog = action.payload;
    },
    closeDialog: state => {
      state.dialog = {
        show: false,
        title: '',
        content: '',
        okButton: '',
        cancelButton: '',
        okButtonColor: '',
        okFunction: null,
      };
    },
    showResearchRecommendationModal: (
      state,
      action: PayloadAction<{ show: boolean; title: string; content: string; tags: string; img: any; link: string; type: string }>,
    ) => {
      state.researchRecommendationModalInfo = action.payload;
    },
    closeResearchRecommendationModal: state => {
      state.researchRecommendationModalInfo = {
        show: false,
        title: '',
        content: '',
        tags: '',
        img: '',
        link: '',
        type: '',
      };
    },
    resetIndicatorStatus: state => {
      state.indicator = {
        isShare: 'N',
        graph: 'N',
        originData: 'N',
        isFilter: 'N',
      };
    },
    setRedirectPath: (state, action: PayloadAction<string>) => {
      state.redirectPath = action.payload;
    },
    getErrorInfo: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  getCommonCode,
  updateCommonCode,
  updateInitIndicator,
  updateIndicatorStatus,
  showTooltip,
  closeTooltip,
  showDialog,
  closeDialog,
  showResearchRecommendationModal,
  closeResearchRecommendationModal,
  resetIndicatorStatus,
  setRedirectPath,
  getErrorInfo,
} = commonSlice.actions;
export default commonSlice.reducer;
