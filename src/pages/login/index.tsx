import React from 'react';
import { useRouter } from 'next/router';
// Redux
import { setToken } from '../../store/reducers/authReducer';
import { useDispatch } from 'react-redux';
// Libraries
import GoogleLogin from 'react-google-login';
// Components
import PageTitle from '../../components/atoms/PageTitle';
import FlexBox from '../../components/atoms/FlexBox';
import { useLogin } from '../../api/authApi';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutate } = useLogin({
    username: 'mor_2314',
    password: '83r5^_',
  });

  const onLoginSuccess = async (res: any) => {
    console.log(res.accessToken, 'RES RES RES');
    const accessToken = res.accessToken;
    if (res.accessToken) {
      dispatch(setToken(accessToken));
      await router.push('/');
    }
  };

  const loginHandler = () => {
    mutate();
  };

  return (
    <FlexBox padding={'0'}>
      <PageTitle title={'Login!'} />
      <button onClick={() => loginHandler()}>login</button>
      <FlexBox padding={'0'} justify={'flex-end'}>
        <GoogleLogin
          clientId="318189383837-p36tbqlb9fd40n868q48u9c2eqgd0r96.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={result => onLoginSuccess(result)}
          onFailure={result => console.log(result)}
          uxMode="popup"
        />
      </FlexBox>
    </FlexBox>
  );
};

export default Login;
