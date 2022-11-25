// Components
import Section1 from '../../diby-client-landing/pages/Home/Section1';
import Section2 from '../../diby-client-landing/pages/Home/Section2';
import Section3 from '../../diby-client-landing/pages/Home/Section3';
import Section4 from '../../diby-client-landing/pages/Home/Section4';
import CustomFooter from '../../diby-client-landing/pages/Home/CustomFooter';
import withTokenAuth from '../hoc/withTokenAuth';
import { fetchUserInfoApi } from '../api/userApi';

import { fetchEmailConfirmApi } from '../api/authApi';
import axios from 'axios';
import { deleteCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../store/reducers/userReducer';

// 도메인 설정
const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;

const Home = props => {
  // console.log(props, '????????????????');
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (props) {
  //     console.log(props, '!!!!!!!!!!!!!!!!');
  //   }
  // }, []);
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CustomFooter />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ req, res, query }) {
  try {
    const { cookies } = req;
    // const { query } = context;

    if (query.constructor === Object && Object.keys(query).length === 0) {
      return {
        props: {},
      };
    } else {
      if (query.token && query.type) {
        // 기존에 로그인이 되어있었을 경우 token을 지워버림
        deleteCookie('accessToken', { req, res });
        deleteCookie('emailVerifiedYn', { req, res });
        deleteCookie('firstTimeYn', { req, res });

        const sendObject = {
          accessToken: query.token,
        };

        // 이메일 인증 유저
        if (query.type === 'emailConfirm') {
          const response = await axios.post(`${CURRENT_DOMAIN}/api/emailConfirm`, sendObject);
          setCookie('accessToken', query.token, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('emailVerifiedYn', response.data.props.emailVerifiedYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('firstTimeYn', response.data.props.firstTimeYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('userInfo', response.data.props, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          return response.data;
        }

        // 초대받은 회원 이메일 인증 및 팀 초대 수락
        if (query.type === 'invite') {
          const response = await axios.post(`${CURRENT_DOMAIN}/api/inviteEmailConfirm`, { teamSeq: query.teamSeq, ...sendObject });
          setCookie('accessToken', query.token, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('emailVerifiedYn', response.data.props.emailVerifiedYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('firstTimeYn', response.data.props.firstTimeYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          setCookie('userInfo', response.data.props, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
          return response.data;
        }

        // 구글 로그인
        if (query.type === 'google') {
          // 초대받은 회원 구글 로그인
          if (query.teamSeq) {
            const response = await axios.post(`${CURRENT_DOMAIN}/api/inviteGoogleLogin`, { teamSeq: query.teamSeq, ...sendObject });
            setCookie('accessToken', query.token, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('emailVerifiedYn', response.data.props.emailVerifiedYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('firstTimeYn', response.data.props.firstTimeYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('userInfo', response.data.props, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            return response.data;
          }
          // 일반 회원 구글 로그인
          else {
            const response = await axios.post(`${CURRENT_DOMAIN}/api/googleLogin`, sendObject);
            setCookie('accessToken', query.token, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('emailVerifiedYn', response.data.props.emailVerifiedYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('firstTimeYn', response.data.props.firstTimeYn, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            setCookie('userInfo', response.data.props, { req, res, maxAge: 24 * 60 * 60 * 1000 * 9 });
            return response.data;
          }
        }
      } else {
        return {
          props: {},
        };
      }
    }
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
}
