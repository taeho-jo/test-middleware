import { useDispatch } from 'react-redux';
import { isShow } from '../../store/reducers/modalReducer';
import { fetchRefreshToken } from '../../api/authApi';
import { useCallback } from 'react';
import {persistor} from "../../pages/_app";
import {profileColor2} from "./commonVar";

export const isLandingPage = path => {
  switch (path) {
    case (path = '/'):
    case (path = '/usecases/ui'):
    case (path = '/usecases/ux'):
    case (path = '/usecases/scenario'):
    case (path = '/usecases/customer'):
      return true;
    default:
      return false;
  }
};

export const closeModal = () => {
  const dispatch = useDispatch();
  dispatch(isShow({ isShow: false, type: '' }));
};

export const checkIsInteger = number => {
  const isInteger = Number.isInteger(number);
  return isInteger ? number : number?.toFixed(1);
};
export const checkIsIntegerTwo = number => {
  const isInteger = Number.isInteger(number);
  return isInteger ? number : number?.toFixed(2);
};

// 리서치 상태 아이콘 이름
export const getResearchStatusIcon = statusType => {
  switch (statusType) {
    case 'RESEARCH_COMPLETED':
      return 'STATUS_COMPLETE';
    case 'RESEARCH_INFO_ENTERING':
    case 'RESEARCH_REQUEST_DESIGN':
    case 'RESEARCH_DESIGN':
    case 'RESEARCH_DESIGN_COMPLETE':
    case 'RESEARCH_START_REQUEST':
      return 'STATUS_BEFORE';
    case 'RESPONSE_RECRUITING':
    case 'RESEARCH_ANALYZING':
      return 'STATUS_ING';
    default:
      return 'STATUS_BEFORE';
  }
};
// const purge = async () => {
//   await persistor.purge();
// }
export const clearLocalStorage = () => {
  // localStorage.removeItem('persist:root');
  localStorage.removeItem('projectNm');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('reactQueryDevtoolsSortFn');
  localStorage.removeItem('commonCode');
  localStorage.removeItem('selectTeamList');
  localStorage.removeItem('teamSeq');
};

export const getBackgroundColor = index => {
  if (index < 10) {
    return profileColor2[index]
  }
  if (index >= 10) {
    const splitNum = String(index).split('')
    const changeNum = parseInt(splitNum[splitNum.length - 1])
    return profileColor2[changeNum]
  }
}

// <--------------------------------- 리서치 금액 계산 ---------------------------------> //
export const calcResearchSolutionFee = RESEARCH_TYPE => {
  switch (RESEARCH_TYPE) {
    case 'UI_DIAGNOSIS':
      return '500,000원';
    case 'FGD':
      return '1,000,000원';
    case 'UX_POSITION_ANALYSIS':
      return '600,000원';
    case 'HYPOTHESIS_VERIFICATION':
      return '600,000원';
    case 'SHORT_SURVEY':
      return '10,000원';
    default:
      return '650,000원 ~ 1,250,000원';
  }
};
export const calcRespondentFee = RESEARCH_TYPE => {
  switch (RESEARCH_TYPE) {
    case 'UI_DIAGNOSIS':
      return '3,000원 ~ 15,000원';
    case 'FGD':
      return '7,000원 ~ 30,000원';
    case 'UX_POSITION_ANALYSIS':
      return '3,000원 ~ 8,000원';
    case 'HYPOTHESIS_VERIFICATION':
      return '1,000원 ~ 10,000원';
    case 'SHORT_SURVEY':
      return '100원 ~ 1,000원';
    default:
      return '650,000원 ~ 1,250,000원';
  }
};

// 예상 응답자 수
export const calcRespondentCount = RESEARCH_TYPE => {
  switch (RESEARCH_TYPE) {
    case 'UI_DIAGNOSIS':
      return '50명';
    case 'FGD':
      return '20명';
    case 'UX_POSITION_ANALYSIS':
      return '150명';
    case 'HYPOTHESIS_VERIFICATION':
      return '100명';
    case 'SHORT_SURVEY':
      return '100명';
    default:
      return '650,000원 ~ 1,250,000원';
  }
};

export const missionAdditionalCompensation = (count: number) => {
  switch (count) {
    case 3:
      return 1000;
    case 4:
      return 4000;
    case 5:
      return 11000;
    case 6:
      return 21000;
    case 7:
      return 35000;
    case 8:
      return 56000;
    default:
      return 0;
  }
};
// <--------------------------------- 리서치 금액 계산 ---------------------------------> //

// <--------------------------------- Debounce ---------------------------------> //
export const debounceFunction = (callback, delay) => {
  let timer;
  return (...agrs) => {
    clearTimeout(timer);

    timer = setTimeout(() => callback(...agrs), delay);
  };
};
// <--------------------------------- Debounce ---------------------------------> //

export const calcWhichStep = (type, stepName) => {
  let step;
  if (type === 'next') {
    switch (stepName) {
      case 'step1':
        return (step = 'step2');
      case 'step2':
        return (step = 'step3');
      case 'step3':
        return (step = 'step4');
      case 'step4':
        return (step = 'step5');
      default:
        return (step = 'step5');
    }
  }
  if (type === 'prev') {
    switch (stepName) {
      case 'step2':
        return (step = 'step1');
      case 'step3':
        return (step = 'step2');
      case 'step4':
        return (step = 'step3');
      case 'step5':
        return (step = 'step4');
      default:
        return (step = 'step1');
    }
  }
};

// 다운로드 파일
export const downloadFile = (link, name) => {
  const tag = document.createElement('a');
  tag.href = link;
  tag.setAttribute('download', name);
  document.body.appendChild(tag);
  tag.click();
};
