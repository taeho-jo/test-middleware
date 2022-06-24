// 리포트 상세 API
import { AXIOS_GET } from '../../hooks/useAxios';

export const fetchReportDetail = async (reportSeq, filterFields = null, filterValues = null, filterFail) => {
  console.log(filterFail, 'FILTERFAIL');
  console.log(filterValues, 'F VALUES');
  console.log(filterFields, 'F FIELDS');

  let apiUrl = `/report/view/${reportSeq}/`;

  if (filterFields && filterValues) {
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
