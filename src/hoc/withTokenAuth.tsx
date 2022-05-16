import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withTokenAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    // const token = useSelector<ReducerType, string>(state => state.auth.token);
    const token = localStorage.getItem('accessToken');

    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능

    useEffect(() => {
      if (!option && !token) {
        router.replace('/index');
      }
      if (router.pathname === '/') {
        if (option && token) {
          router.replace('/admin/team');
        }
      }
    }, [token]);

    return <SpecificComponent />;
  };
  return AuthenticateCheck;
}
