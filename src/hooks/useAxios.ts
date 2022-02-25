import AXIOS from '../api/axios/axios';

// 일반 GET 요청
export const AXIOS_GET = async (url: string) => {
  const { data } = await AXIOS.get(url);
  return data;
};

// READ POST 요청 ( 단순 DATA Fetching )
export const AXIOS_POST = async (url: string, sendObject: any) => {
  const { data } = await AXIOS.post(url, sendObject);
  return data;
};

// CREATE, UPDATE, DELETE POST 요청 ( DATA 수정 요청 )
