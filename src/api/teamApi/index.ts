import { AXIOS_DELETE, AXIOS_GET, AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';

// 팀 리스트 API
export const fetchTeamListApi = async () => {
  return await AXIOS_GET('/team');
};
// 팀 생성 API
export const fetchCreateTeamApi = async sendObject => {
  return await AXIOS_POST('/team', sendObject);
};

// 팀 수정 API
export const fetchUpdateTeamApi = async sendObject => {
  return await AXIOS_PATCH(`/team/${sendObject[0]}`, sendObject[1]);
};

// 프로덕트 리스트 조회 API
export const fetchProductListApi = async teamSeq => {
  return await AXIOS_GET(`/team/${teamSeq}/product`);
};

// 프로덕트 생성 API
export const fetchCreateProductApi = async (sendObject, teamSeq) => {
  return await AXIOS_POST(`/team/${teamSeq}/product`, sendObject);
};

// 프로덕트 수정 API
export const fetchUpdateProductApi = async (teamSeq, productSeq, sendObject) => {
  return await AXIOS_PATCH(`/team/${teamSeq}/product/${productSeq}`, sendObject);
};

// 프로덕트 삭제 API
export const fetchDeleteProductAi = async (teamSeq, productSeq) => {
  return await AXIOS_DELETE(`/team/${teamSeq}/product/${productSeq}`);
};

// 팀원 조회 API
export const fetchMemberListApi = async teamSeq => {
  return await AXIOS_GET(`/team/${teamSeq}/member`);
};

// 팀원 권한 변경 API
export const fetchMemberAuthChangeApi = async (teamSeq, userId) => {
  return await AXIOS_PATCH(`/team/${teamSeq}/member/${userId}`, {});
};

// 팀원 삭제 API
export const fetchMemberRemoveApi = async (teamSeq, userId) => {
  return await AXIOS_DELETE(`/team/${teamSeq}/member/${userId}`);
};

// 팀원 이메일 초대 API
export const fetchInviteMemberApi = async sendObject => {
  return await AXIOS_POST('/team/member/invite', sendObject);
};

// 팀 리포트 목록 조회 API
export const fetchTeamReportListApi = async teamSeq => {
  return await AXIOS_GET(`/team/${teamSeq}/project/report`);
};
