import React from 'react';
import { useRouter } from 'next/router';
// Libraries
import axios from 'axios';
// Components
import PageTitle from '../../components/atoms/PageTitle';
import FlexBox from '../../components/atoms/FlexBox';

const Login = () => {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res1 = await axios.get(process.env.NEXT_PUBLIC_API);
      if (res1.status === 200) {
        const res: any = await axios.post('/api/login', { token: '1234566' });
        if (res.status === 200) {
          await router.push('/');
        } else {
          await router.push('/login');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <FlexBox padding={'0'}>
      <PageTitle title={'Login!'} />
      <button onClick={handleLogin}>login</button>
    </FlexBox>
  );
};

export default Login;
