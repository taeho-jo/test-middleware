import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function changePasswordAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const resetToken = sessionStorage.getItem('accessToken');

    // option
    // true : 권한 상관없이 접근가능
    // false : 로그인한 유저만 접근가능

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
