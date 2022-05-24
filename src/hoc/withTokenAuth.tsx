import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withTokenAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
    const token = localStorage.getItem('accessToken');

    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능
    useEffect(() => {
      if ((!option && !token) || userInfo.emailVerifiedYn === 'N') {
        router.replace('/index');
      }
      if (!option && token && userInfo.emailVerifiedYn !== 'Y') {
        return;
      }
      if (router.pathname === '/') {
        if (option && token && userInfo.emailVerifiedYn === 'Y') {
          router.replace('/admin/team');
        }
      }
    }, [token, userInfo]);

    return <SpecificComponent />;
  };
  return AuthenticateCheck;
}
