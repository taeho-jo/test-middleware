// 팀 리서치 최초 생성
import { AXIOS_GET, AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';

// 리서치 목록 조회 api
export const fetchGetResearchListApi = async params => {
  const { teamSeq, researchNm, researchType, statusType } = params;
  return await AXIOS_GET(`/team/${teamSeq}/research?researchNm=${researchNm}&researchType=${researchType}&statusType=${statusType}`);
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
  return await AXIOS_PATCH(`/team/${sendObject.teamSeq}/research`, sendObject);
};
