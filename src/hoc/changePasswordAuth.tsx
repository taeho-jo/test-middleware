import React, { useEffect } from 'react';
// Redux
import { useRouter } from 'next/router';

export default function changePasswordAuth(SpecificComponent: any, option: boolean) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const resetToken = sessionStorage.getItem('accessToken');

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
