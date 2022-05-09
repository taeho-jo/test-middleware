import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withNoAuth(SpecificComponent: any) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const token = useSelector<ReducerType, string>(state => state.auth.token);

    useEffect(() => {
      if (token) {
        router.replace('/admin/team');
      }
    }, [token, router]);

    return <>{!token ? <SpecificComponent /> : <div></div>}</>;
  };
  return AuthenticateCheck;
}
