import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function changePasswordAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
    const token = localStorage.getItem('accessToken');
    const userId = sessionStorage.getItem('userId');
    const resetToken = sessionStorage.getItem('accessToken');

    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능
    // useEffect(() => {
    //   if ((!option && !token) || userInfo.emailVerifiedYn === 'N') {
    //     router.replace('/index');
    //   }
    //   if (!option && token && userInfo.emailVerifiedYn !== 'Y' && !resetToken) {
    //     router.replace('/admin/team');
    //   }
    //   if (!option && token && userInfo.emailVerifiedYn !== 'Y' && resetToken) {
    //     return;
    //   }
    //   if (router.pathname === '/') {
    //     if (option && token && userInfo.emailVerifiedYn === 'Y') {
    //       router.replace('/admin/team');
    //     }
    //   }
    // }, [token, userInfo,]);

    useEffect(() => {
      if (resetToken) {
        return;
      } else {
        router.replace('/');
      }
    }, [resetToken]);

    return <SpecificComponent />;
  };
  return AuthenticateCheck;
}
