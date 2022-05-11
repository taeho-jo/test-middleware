import React, { useEffect } from 'react';
// Redux
import { ReducerType } from '../store/reducers';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function withTokenAuth(SpecificComponent: any) {
  const AuthenticateCheck = () => {
    const router = useRouter();
    const token = useSelector<ReducerType, string>(state => state.auth.token);

    useEffect(() => {
      console.log('token :: ', token);
      console.log(localStorage.getItem('auth'), 'ssss');
      if (!token) {
        console.log('이걸타는거지??');
        router.push('/');
      }
    }, [token]);

    return <>{token ? <SpecificComponent /> : <div>No Auth, redirect...</div>}</>;
  };
  return AuthenticateCheck;
}
