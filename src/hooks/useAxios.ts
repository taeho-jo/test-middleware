import AXIOS from '../api/axios/axios';

const searchParam = key => {
  return new URLSearchParams(location.search).get(key);
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('accessToken');
  const resetToken = sessionStorage.getItem('accessToken');
  const queryToken = searchParam('token');

  const header = {
    Authorization: token ? `Bearer ${token}` : queryToken ? `Bearer ${queryToken}` : resetToken ? `Bearer ${resetToken}` : '',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': false,
  };

  return header;
};

// 일반 GET 요청
export const AXIOS_GET = async (url: string) => {
  const headers = getAuthHeader();

  const { data } = await AXIOS.get(url, { headers });
  return data;
};

// READ POST 요청 ( 단순 DATA Fetching )
export const AXIOS_POST = async (url: string, sendObject: any) => {
  const headers = getAuthHeader();

  const { data } = await AXIOS.post(url, sendObject, { headers });

  return data;
};

// CREATE, UPDATE, DELETE POST 요청 ( DATA 수정 요청 )

// PUT
export const AXIOS_PUT = async (url: string, sendObject: any) => {
  const { data } = await AXIOS.put(url, sendObject);
  return data;
};

export const AXIOS_PATCH = async (url: string, sendObject: any) => {
  const headers = getAuthHeader();
  const { data } = await AXIOS.patch(url, sendObject, { headers });
  return data;
};
