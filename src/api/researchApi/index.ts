// 팀 리서치 최초 생성
import { AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH, AXIOS_POST, AXIOS_PUT } from '../../hooks/useAxios';

// 리서치 목록 조회 api
export const fetchGetResearchListApi = async params => {
  const { teamSeq, searchText, researchType, statusType } = params;
  return await AXIOS_GET(`/team/${teamSeq}/research?searchText=${searchText}&researchType=${researchType}&statusType=${statusType}`);
};

// 리서치 상세 조회 api
export const fetchGetResearchDetailInfoApi = async params => {
  const { teamSeq, researchSeq } = params;
  return await AXIOS_GET(`/team/${teamSeq}/research/${researchSeq}`);
};

// 리서치 생성 api
export const fetchCreateTeamResearchApi = async sendObject => {
  return await AXIOS_POST(`/team/${sendObject.teamSeq}/research`, sendObject);
};

// 리서치 수정 api
export const fetchModifyTeamResearchApi = async sendObject => {
  return await AXIOS_PUT(`/team/${sendObject.teamSeq}/research/${sendObject.researchSeq}`, sendObject);
};

// 리서치 삭제 api
export const fetchDeleteTeamResearchApi = async (teamSeq, researchSeq) => {
  return await AXIOS_DELETE(`team/${teamSeq}/research/${researchSeq}`);
};

// 리서치 추천 문항 조회 api
export const fetchRecommendationQuestionApi = async () => {
  return await AXIOS_GET(`/recommend`);
};
