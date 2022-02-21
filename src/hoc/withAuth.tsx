import React, { useEffect } from 'react';
import Login from '../pages/login';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../store/reducers';
import { useRouter } from 'next/router';

export default function withAuth(SpecificComponent: () => JSX.Element) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const token = useSelector<ReducerType, string>(state => state.auth.token);

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, []);

    return <>{token ? <SpecificComponent /> : <div>Redirect....</div>}</>;
  };
  return AuthenticateCheck;
}
