import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withoutTokenAuth(SpecificComponent: any, path: string) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const token = useSelector<ReducerType, string>(state => state.auth.token);

    useEffect(() => {
      // if (token) {
      //   router.replace('/admin/team');
      // }
      if (token) {
        router.replace('/admin/team');
      }
    }, [token]);

    return <>{!token ? <SpecificComponent /> : <div>You're already our Member. Redirect Main...</div>}</>;
  };
  return AuthenticateCheck;
}
