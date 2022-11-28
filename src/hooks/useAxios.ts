import AXIOS from '../api/axios/axios';
import { useRouter } from 'next/router';
import { fetchRefreshToken } from '../api/authApi';
import { useQueryClient } from 'react-query';
import { Cookies } from 'react-cookie';

const searchParam = key => {
  return new URLSearchParams(location.search).get(key);
};

export const getAuthHeader = (accessToken?: string) => {
  const cookies = new Cookies();
  const token = cookies.get('accessToken');
  // const token = localStorage.getItem('accessToken');
  // const resetToken = sessionStorage.getItem('accessToken');
  // const queryToken = searchParam('token');

  const header = {
    Authorization: token ? `Bearer ${token}` : accessToken ? `Bearer ${accessToken}` : null,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': false,
  };

  return header;
};

// 일반 GET 요청
export const AXIOS_GET = async (url: string, token?: string) => {
  const headers = getAuthHeader(token);

  const { data } = await AXIOS.get(url, { headers });
  return data;
};

// READ POST 요청 ( 단순 DATA Fetching )
export const AXIOS_POST = async (url: string, sendObject: any, token?: string) => {
  const headers = token ? getAuthHeader(token) : getAuthHeader();
  const { data } = await AXIOS.post(url, sendObject, { headers });
  return data;
};

// CREATE, UPDATE, DELETE POST 요청 ( DATA 수정 요청 )

// PUT
export const AXIOS_PUT = async (url: string, sendObject: any) => {
  const headers = getAuthHeader();
  const { data } = await AXIOS.put(url, sendObject, { headers });
  return data;
};

// PATCH
export const AXIOS_PATCH = async (url: string, sendObject?: any, token?: string) => {
  const headers = token ? getAuthHeader(token) : getAuthHeader();
  const { data } = await AXIOS.patch(url, sendObject, { headers });
  return data;
};

// DELETE
export const AXIOS_DELETE = async (url: string) => {
  const headers = getAuthHeader();
  const { data } = await AXIOS.delete(url, { headers });
  return data;
};
export const AXIOS_BODY_DELETE = async (url: string, sendObject: any) => {
  const headers = getAuthHeader();
  const config = {
    headers,
    data: sendObject,
  };
  const { data } = await AXIOS.delete(url, config);
  return data;
};
