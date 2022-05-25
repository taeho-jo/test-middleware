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
    const test = true;
    const resetToken = sessionStorage.getItem('accessToken');
    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능
    const removeSesstionStorage = () => {
      sessionStorage.clear();
      router.replace('/');
    };
    useEffect(() => {
      console.log(userInfo);
      if (resetToken) {
        removeSesstionStorage();
      }
      if (!option && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'Y') {
        router.replace('/admin/profile');
      }
      if (!option && userInfo.emailVerifiedYn === 'Y' && userInfo.firstTimeYn === 'N') {
        router.replace('/admin/team');
      }
      if ((!option && !token) || userInfo.emailVerifiedYn === 'N') {
        router.replace('/index');
      }
      if (!option && token && userInfo.emailVerifiedYn !== 'Y') {
        return;
      }
      if (!option && token && userInfo.emailVerifiedYn !== 'Y') {
        router.replace('/index');
      }
      if (router.pathname === '/') {
        if (option && token && userInfo.emailVerifiedYn === 'Y') {
          router.replace('/admin/team');
        }
      }
    }, [token, userInfo, resetToken]);

    return <SpecificComponent />;
  };
  return AuthenticateCheck;
}
