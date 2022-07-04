// 리포트 상세 API
import { AXIOS_GET } from '../../hooks/useAxios';

// 리포트 조회 API
export const fetchReportDetail = async (reportSeq, filterFields = null, filterValues = null, filterFail) => {
  let apiUrl = `/report/view/${reportSeq}/`;

  if (filterFields && filterValues && !filterFail) {
    console.log(1);
    apiUrl = `/report/view/${reportSeq}/?filterFields=${filterFields}&filterValues
=${filterValues}`;
    return await AXIOS_GET(apiUrl);
  }

  if (!filterFields && !filterValues && filterFail) {
    console.log(2);
    apiUrl = `/report/view/${reportSeq}/?filterFail=on`;
    return await AXIOS_GET(apiUrl);
  }

  if (filterFields && filterValues && filterFail) {
    console.log(3);
    apiUrl = `/report/view/${reportSeq}/?filterFields=${filterFields}&filterValues
=${filterValues}&filterFail=on`;
    return await AXIOS_GET(apiUrl);
  }

  if (!filterFields && !filterValues && !filterFail) {
    console.log(4);
    apiUrl = `/report/view/${reportSeq}/`;
    return await AXIOS_GET(apiUrl);
  }
};

// 리포트 공유 하기 API
export const fetchReportShareIdApi = async reportSeq => {
  return await AXIOS_GET(`/report/share/${reportSeq}/`);
};

// 리포트 공유 조회 API
export const fetchReportShare = async (reportSeq, filterFields = null, filterValues = null, filterFail) => {
  let apiUrl = `/report/share/${reportSeq}/`;

  if (filterFields && filterValues && !filterFail) {
    console.log(1);
    apiUrl = `/report/share/${reportSeq}/?filterFields=${filterFields}&filterValues
=${filterValues}`;
    return await AXIOS_GET(apiUrl);
  }

  if (!filterFields && !filterValues && filterFail) {
    console.log(2);
    apiUrl = `/report/share/${reportSeq}/?filterFail=on`;
    return await AXIOS_GET(apiUrl);
  }

  if (filterFields && filterValues && filterFail) {
    console.log(3);
    apiUrl = `/report/share/${reportSeq}/?filterFields=${filterFields}&filterValues
=${filterValues}&filterFail=on`;
    return await AXIOS_GET(apiUrl);
  }

  if (!filterFields && !filterValues && !filterFail) {
    console.log(4);
    apiUrl = `/report/share/${reportSeq}/`;
    return await AXIOS_GET(apiUrl);
  }
};
