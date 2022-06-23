// 리포트 상세 API
import { AXIOS_GET } from '../../hooks/useAxios';

export const fetchReportDetail = async (reportSeq, filterFields?, filterValues?) => {
  const apiUrl =
    filterFields && filterValues
      ? `/report/view/${reportSeq}/?filterFields=${filterFields}&filterValues
=${filterValues}`
      : `/report/view/${reportSeq}/`;
  return await AXIOS_GET(apiUrl);
};
