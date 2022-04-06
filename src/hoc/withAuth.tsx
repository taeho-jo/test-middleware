import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withAuth(SpecificComponent: any) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const token = useSelector<ReducerType, string>(state => state.auth.token);

    useEffect(() => {
      if (token) {
        router.push('/login');
      }
    }, []);

    return <>{!token ? <SpecificComponent /> : <div>Redirect....</div>}</>;
  };
  return AuthenticateCheck;
}
